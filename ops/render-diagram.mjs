import { readFile, writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';
const source = await readFile(new URL('../docs/arch-engineering-drawing.svg', import.meta.url));
const renderer = new Resvg(source, { font: { defaultFontFamily: 'Segoe UI', loadSystemFonts: true } });
await writeFile(new URL('../docs/arch-engineering-drawing.png', import.meta.url), renderer.render().asPng());
console.log('Rendered docs/arch-engineering-drawing.png');
