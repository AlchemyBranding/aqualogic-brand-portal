import fs from 'node:fs';
import path from 'node:path';

export type AssetFile = {
  name: string;
  fileName: string;
  href: string;
  ext: string;
  sizeKb: number;
  variant?: string;
};

const PUBLIC_ROOT = path.join(process.cwd(), 'public');
const README_NAMES = new Set(['README.md', 'readme.md', '.gitkeep']);

/**
 * Read files in /public/<folder> at build time and return metadata for rendering
 * download cards. README.md and dotfiles are ignored so the folder placeholder
 * documentation does not show up as a downloadable asset.
 *
 * folder is a path under /public, e.g. 'assets/aqualogic/logos'
 */
export function getAssets(folder: string): AssetFile[] {
  const absolute = path.join(PUBLIC_ROOT, folder);
  let entries: string[] = [];
  try {
    entries = fs.readdirSync(absolute);
  } catch {
    return [];
  }
  const files = entries.filter((entry) => {
    if (README_NAMES.has(entry)) return false;
    if (entry.startsWith('.')) return false;
    const stat = fs.statSync(path.join(absolute, entry));
    return stat.isFile();
  });

  return files.map((fileName) => {
    const ext = path.extname(fileName).replace('.', '').toLowerCase();
    const baseName = path.basename(fileName, path.extname(fileName));
    const stat = fs.statSync(path.join(absolute, fileName));
    return {
      name: prettify(baseName),
      fileName,
      href: encodeURI('/' + folder.split(path.sep).join('/') + '/' + fileName),
      ext,
      sizeKb: Math.round((stat.size / 1024) * 10) / 10,
      variant: detectVariant(baseName)
    };
  });
}

/**
 * Return the names of the immediate subfolders of /public/<folder>, sorted.
 * Used to render a browseable sub-section per folder (e.g. photography).
 */
export function getSubfolders(folder: string): string[] {
  const absolute = path.join(PUBLIC_ROOT, folder);
  let entries: string[] = [];
  try {
    entries = fs.readdirSync(absolute);
  } catch {
    return [];
  }
  return entries
    .filter((entry) => {
      if (entry.startsWith('.')) return false;
      return fs.statSync(path.join(absolute, entry)).isDirectory();
    })
    .sort((a, b) => a.localeCompare(b));
}

function prettify(slug: string) {
  return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function detectVariant(slug: string): string | undefined {
  const m = slug.toLowerCase();
  if (m.includes('primary')) return 'Primary';
  if (m.includes('mono')) return 'Monochrome';
  if (m.includes('reverse')) return 'Reverse';
  if (m.includes('horizontal')) return 'Horizontal';
  if (m.includes('stacked')) return 'Stacked';
  if (m.includes('mark')) return 'Mark';
  return undefined;
}
