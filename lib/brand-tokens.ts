// Brand-specific design tokens used by component variants.
// Single source of truth for any colour/typography surfaced in the portal UI.

export type BrandKey = 'aqualogic' | 'sustec' | 'group';

export const brandMeta: Record<
  BrandKey,
  {
    name: string;
    eyebrow: string;
    strapline: string;
    palette: { name: string; hex: string; note?: string }[];
    grayscale: { name: string; hex: string }[];
    typeface: { family: string; weights: string[]; source: string };
    bodyClass: string;
  }
> = {
  aqualogic: {
    name: 'Aqualogic',
    eyebrow: 'Operating brand',
    strapline: 'Intelligent water conservation',
    palette: [
      { name: 'Paper', hex: '#FAFBFF' },
      { name: 'Aqua Cyan', hex: '#00B6DB' },
      { name: 'Ink', hex: '#0C2C3A' },
      { name: 'Sky', hex: '#6AC2D8' }
    ],
    grayscale: [
      { name: 'Cloud', hex: '#EDEFF7' },
      { name: 'Smoke', hex: '#D3D6E0' },
      { name: 'Steel', hex: '#BCBFCC' },
      { name: 'Space', hex: '#9DA2B3' },
      { name: 'Graphite', hex: '#6E7180' },
      { name: 'Arsenic', hex: '#40424D' },
      { name: 'Phantom', hex: '#1E1E24' },
      { name: 'Black', hex: '#000000' }
    ],
    typeface: {
      family: 'Manrope',
      weights: ['ExtraLight 200', 'Light 300', 'Regular 400', 'Medium 500', 'Semibold 600', 'Bold 700', 'ExtraBold 800'],
      source: 'Google Fonts (open source)'
    },
    bodyClass: 'brand-aqualogic'
  },
  sustec: {
    name: 'Sustec',
    eyebrow: 'Group brand',
    strapline: 'A platform for connected water and sustainability businesses',
    palette: [
      { name: 'Paper', hex: '#FAFBFF' },
      { name: 'Sustec Blue', hex: '#0092D2' },
      { name: 'Black', hex: '#000000' },
      { name: 'Sustec Green', hex: '#71D35F' }
    ],
    grayscale: [
      { name: 'Cloud', hex: '#EDEFF7' },
      { name: 'Smoke', hex: '#D3D6E0' },
      { name: 'Steel', hex: '#BCBFCC' },
      { name: 'Space', hex: '#9DA2B3' },
      { name: 'Graphite', hex: '#6E7180' },
      { name: 'Arsenic', hex: '#40424D' },
      { name: 'Phantom', hex: '#1E1E24' },
      { name: 'Black', hex: '#000000' }
    ],
    typeface: {
      family: 'Manrope',
      weights: ['ExtraLight 200', 'Light 300', 'Regular 400', 'Medium 500', 'Semibold 600', 'Bold 700', 'ExtraBold 800'],
      source: 'Google Fonts (open source)'
    },
    bodyClass: 'brand-sustec'
  },
  group: {
    name: 'Sustec Group',
    eyebrow: 'Group',
    strapline: 'A working brand bible for the businesses in the Sustec portfolio.',
    palette: [],
    grayscale: [],
    typeface: { family: 'Manrope', weights: [], source: '' },
    bodyClass: 'brand-group'
  }
};
