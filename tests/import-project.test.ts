import { describe, expect, it } from 'vitest';
import { File as NodeFile } from 'node:buffer';
import { strToU8, zipSync } from 'fflate';
import { allowedImportPath, IMPORT_LIMIT, importProjectFiles } from '../src/lib/import-project';

type InputFile = Parameters<typeof importProjectFiles>[0][number];
const file = (name: string, content: string | Uint8Array): InputFile =>
  new NodeFile([content], name) as unknown as InputFile;
const zip = (entries: Record<string, string>): InputFile => file('project.zip', zipSync(
  Object.fromEntries(Object.entries(entries).map(([path, content]) => [path, strToU8(content)])),
));

describe('source import boundaries', () => {
  it('preserves actual source while excluding secrets and dependencies in an archive', async () => {
    const result = await importProjectFiles([zip({
      'index.html': '<h1>Actual imported content</h1>',
      'src/app.ts': 'export const answer = 42;',
      '.env.local': 'SECRET=do-not-import',
      'secrets.json': '{"token":"do-not-import"}',
      'node_modules/package/index.js': 'dependency',
      '.git/config.txt': 'repository internals',
      '../outside.html': 'unsafe path',
      'logo.png': 'binary image',
    })]);
    expect(result).toEqual([
      { path: 'index.html', content: '<h1>Actual imported content</h1>' },
      { path: 'src/app.ts', content: 'export const answer = 42;' },
    ]);
  });

  it('uses directory-upload paths when checking for excluded dependencies', async () => {
    const dependency = file('index.js', 'dependency');
    Object.defineProperty(dependency, 'webkitRelativePath', { value: 'project/node_modules/pkg/index.js' });
    const result = await importProjectFiles([dependency, file('index.html', '<h1>App</h1>')]);
    expect(result).toEqual([{ path: 'index.html', content: '<h1>App</h1>' }]);
  });

  it('rejects oversized compressed source rather than using compressed size as the source limit', async () => {
    const archive = zip({ 'app.js': 'x'.repeat(IMPORT_LIMIT + 1) });
    expect(archive.size).toBeLessThan(10_000);
    await expect(importProjectFiles([archive])).rejects.toThrow(/300 KB/);
  });

  it('counts UTF-8 bytes across separate source files', async () => {
    const content = '😀'.repeat(40_000); // 160 KB, despite 80,000 UTF-16 code units.
    await expect(importProjectFiles([file('first.txt', content), file('second.txt', content)]))
      .rejects.toThrow(/300 KB/);
  });

  it('applies the aggregate source limit across archives and loose files', async () => {
    await expect(importProjectFiles([
      zip({ 'first.txt': 'x'.repeat(160_000) }),
      file('second.txt', 'x'.repeat(160_000)),
    ])).rejects.toThrow(/300 KB/);
  });

  it('rejects more than 100 source files even when each is small', async () => {
    const entries = Object.fromEntries(Array.from({ length: 101 }, (_, index) => [`source-${index}.ts`, 'export {};']));
    await expect(importProjectFiles([zip(entries)])).rejects.toThrow(/100 source files/);
  });

  it('reports no supported source instead of returning an empty project', async () => {
    await expect(importProjectFiles([file('picture.png', 'not source')]))
      .rejects.toThrow(/No supported source files/);
  });

  it('rejects a corrupt archive without silently accepting partial data', async () => {
    await expect(importProjectFiles([file('broken.zip', 'This is not a ZIP file')])).rejects.toThrow();
  });

  it('does not allow two different source files to occupy the same project path', async () => {
    await expect(importProjectFiles([
      file('index.html', '<h1>First file</h1>'),
      zip({ 'index.html': '<h1>Different file</h1>' }),
    ])).rejects.toThrow(/duplicate|same path|already exists/i);
  });

  it('filters case variants of sensitive filenames on the Windows upload path', () => {
    expect(allowedImportPath('config/.ENV.JSON')).toBe(false);
    expect(allowedImportPath('config/SECRETS.json')).toBe(false);
    expect(allowedImportPath('src/component.TSX')).toBe(true);
  });
});
