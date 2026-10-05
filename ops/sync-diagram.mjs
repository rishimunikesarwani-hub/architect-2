import { copyFile, mkdir } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
await mkdir(new URL('src/public/', root), { recursive: true });
await copyFile(new URL('docs/arch-engineering-drawing.svg', root), new URL('src/public/engineering-drawing.svg', root));
await copyFile(new URL('docs/arch-production-architecture.svg', root), new URL('src/public/production-architecture.svg', root));
await copyFile(new URL('docs/arch-production-architecture.svg', root), new URL('src/public/arch-production-architecture.svg', root));
await copyFile(new URL('docs/arch-production-architecture.md', root), new URL('src/public/arch-production-architecture.md', root));
