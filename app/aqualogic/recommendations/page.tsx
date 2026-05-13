import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Recommendations } from '@/components/Recommendations';

export const metadata = { title: 'Recommendations — Aqualogic' };

const items = [
  {
    title: 'Logo: publish mono, reverse and single-colour variants',
    detail:
      'The current guideline doc shows the primary lockup and mark with clearspace rules, but does not formally publish monochrome, reverse (white on dark) or single-colour variants. Add these and define minimum-size rules in pixels and millimetres.'
  },
  {
    title: 'Colour: add RGB, CMYK, Pantone and contrast ratios',
    detail:
      'Hex values are published. RGB, CMYK, and Pantone equivalents are missing, as is accessibility guidance. Verify WCAG 2.1 AA contrast for every text / background pairing used in production. Aqua Cyan on Paper is borderline at small body sizes; do not use as long-form body colour.'
  },
  {
    title: 'Typography: define a hierarchy',
    detail:
      'Manrope is named but the H1–H6 scale, line-heights, letter spacing, paragraph spacing and a secondary editorial typeface are not specified. Add a hierarchy table and a fallback stack for environments without Manrope.'
  },
  {
    title: 'Icon system: define one',
    detail:
      'No icon system is currently specified beyond the Twitter / Instagram application icons. Recommend selecting an open-source set (Lucide, Phosphor, Material Symbols) or commissioning a bespoke set, with weight, corner radius and stroke rules.'
  },
  {
    title: 'Grid and layout system',
    detail:
      'No grid or spacing scale is specified. Recommend adding a 12-column responsive grid, a baseline spacing scale (e.g. 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64), and rules for page margins on print and digital.'
  },
  {
    title: 'Photography style',
    detail:
      'No photography direction is published. The current /aqualogic/visuals/imagery page surfaces guidance inferred from the strategy doc. Recommend a dedicated photography section with do / don’t examples once the library has been built up through /admin/upload.'
  },
  {
    title: 'Motion and animation for digital',
    detail:
      'No motion guidance exists. Recommend basic rules for digital surfaces: easing curve, duration ranges (e.g. 150–300ms), micro-interaction principles, and what should never animate (logo, key copy).'
  },
  {
    title: 'Do’s and don’ts examples',
    detail:
      'No worked examples of correct vs incorrect usage. Recommend adding visual examples for logo placement, clearspace violations, colour pairings and tone of voice (good / bad copy comparisons).'
  },
  {
    title: 'Accessibility statement',
    detail:
      'Recommend publishing a short brand-level accessibility statement: contrast ratios, focus state expectations for digital, captioning and alt-text guidance for marketing content.'
  }
];

export default function AqualogicRecommendations() {
  return (
    <BrandFrame brand="aqualogic">
      <PageHeader
        eyebrow="Aqualogic / Recommendations"
        title="Recommendations."
        lede="A structural read of where the existing Aqualogic visual guidelines are thin. None of these are invented rules. They are missing pieces in the guideline document that should be added so the brand can scale."
      />
      <Recommendations brand="Aqualogic" items={items} />
    </BrandFrame>
  );
}
