// Full colour system data for the brand palettes. RGB, CMYK and Pantone are
// derived once here and referenced wherever swatches are shown so the system
// stays consistent across pages.
//
// CMYK is calculated algorithmically from the RGB values (printer-dependent
// approximation, fine for digital reference; production print runs should
// be checked against a calibrated proof).
//
// Pantone matches are "closest match" picks for the Coated (C) book and
// should be confirmed against a physical Pantone fan deck for print runs.

export type ColourSpec = {
  name: string;
  hex: string;
  rgb: { r: number; g: number; b: number };
  cmyk: { c: number; m: number; y: number; k: number };
  pantone: string;
  note?: string;
};

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace('#', '');
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToCmyk(r: number, g: number, b: number) {
  const rf = r / 255;
  const gf = g / 255;
  const bf = b / 255;
  const k = 1 - Math.max(rf, gf, bf);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
  const c = (1 - rf - k) / (1 - k);
  const m = (1 - gf - k) / (1 - k);
  const y = (1 - bf - k) / (1 - k);
  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100)
  };
}

function spec(name: string, hex: string, pantone: string, note?: string): ColourSpec {
  const rgb = hexToRgb(hex);
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
  return { name, hex, rgb, cmyk, pantone, note };
}

// Pantone approximations — closest Coated (C) matches.
// Confirm against a calibrated fan deck before going to print.
export const aqualogicColours: ColourSpec[] = [
  spec('Paper', '#FAFBFF', 'White / 663 C', 'Default background. Sits gently off pure white.'),
  spec('Aqua Cyan', '#00B6DB', '312 C', 'Accent colour. Use for links, calls to action and the strapline.'),
  spec('Ink', '#0C2C3A', '539 C', 'Primary text colour. Use for body, headings and on Paper.'),
  spec('Sky', '#6AC2D8', '305 C', 'Soft support tone. Avoid for primary text on Paper.')
];

export const sustecColours: ColourSpec[] = [
  spec('Paper', '#FAFBFF', 'White / 663 C', 'Default background.'),
  spec('Sustec Blue', '#0092D2', '2925 C', 'Primary brand colour. Use for the logo, key surfaces and headlines.'),
  spec('Sustec Green', '#71D35F', '360 C', 'Signal colour. Use sparingly to highlight sustainability content.'),
  spec('Black', '#000000', 'Black 6 C', 'Used in the wordmark and where a strong neutral is needed.')
];

export const grayscaleColours: ColourSpec[] = [
  spec('Cloud', '#EDEFF7', 'Cool Gray 1 C'),
  spec('Smoke', '#D3D6E0', 'Cool Gray 2 C'),
  spec('Steel', '#BCBFCC', 'Cool Gray 4 C'),
  spec('Space', '#9DA2B3', 'Cool Gray 6 C'),
  spec('Graphite', '#6E7180', 'Cool Gray 9 C'),
  spec('Arsenic', '#40424D', 'Cool Gray 11 C'),
  spec('Phantom', '#1E1E24', 'Black 6 C'),
  spec('Black', '#000000', 'Black 6 C')
];

// WCAG 2.1 contrast ratio calculation.
function luminance(hex: string): number {
  const rgb = hexToRgb(hex);
  const channels = [rgb.r, rgb.g, rgb.b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function contrastRatio(hexA: string, hexB: string): number {
  const la = luminance(hexA);
  const lb = luminance(hexB);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

export type ContrastVerdict = {
  ratio: number;
  // WCAG 2.1 AA: 4.5:1 for normal text, 3:1 for large text and UI components.
  // WCAG 2.1 AAA: 7:1 for normal text.
  normalAA: boolean;
  largeAA: boolean;
  normalAAA: boolean;
  label: 'Pass AAA' | 'Pass AA' | 'Pass AA large only' | 'Fail';
};

export function verdict(fg: string, bg: string): ContrastVerdict {
  const ratio = contrastRatio(fg, bg);
  const r = +ratio.toFixed(2);
  const normalAAA = ratio >= 7;
  const normalAA = ratio >= 4.5;
  const largeAA = ratio >= 3;
  const label = normalAAA
    ? 'Pass AAA'
    : normalAA
      ? 'Pass AA'
      : largeAA
        ? 'Pass AA large only'
        : 'Fail';
  return { ratio: r, normalAA, largeAA, normalAAA, label };
}
