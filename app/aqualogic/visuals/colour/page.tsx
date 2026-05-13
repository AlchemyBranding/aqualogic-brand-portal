import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { SwatchGrid } from '@/components/SwatchGrid';
import { brandMeta } from '@/lib/brand-tokens';
import { Callout } from '@/components/Callout';

export const metadata = { title: 'Colour — Aqualogic' };

export default function AqualogicColour() {
  const meta = brandMeta.aqualogic;
  return (
    <BrandFrame brand="aqualogic">
      <PageHeader
        eyebrow="Aqualogic / Visuals / Colour"
        title="Colour."
        lede="The Aqualogic palette anchors the brand visually. Aqua Cyan brings the freshness and clarity of the strapline, Ink provides depth and authority, Sky is a softer support tone, and Paper is the neutral surface most copy sits on."
      />

      <section className="container-page pb-14">
        <p className="eyebrow mb-6">Primary palette</p>
        <SwatchGrid swatches={meta.palette} columns={4} />
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-6">Grayscale</p>
        <SwatchGrid swatches={meta.grayscale} columns={4} />
      </section>

      <section className="container-page pb-14 max-w-prose">
        <h2 className="h-section text-aqualogic-ink">Usage notes</h2>
        <ul className="body-prose mt-4 space-y-3">
          <li><strong>Ink (#0C2C3A)</strong> &mdash; primary text colour. Use for body, headings and on Paper backgrounds.</li>
          <li><strong>Aqua Cyan (#00B6DB)</strong> &mdash; accent colour for links, calls to action, the strapline, infographics, and selective highlights.</li>
          <li><strong>Sky (#6AC2D8)</strong> &mdash; soft support tone for tinted surfaces, illustrations, secondary callouts. Avoid as a primary text colour: contrast on Paper is too low.</li>
          <li><strong>Paper (#FAFBFF)</strong> &mdash; default background. Sits gently off pure white.</li>
        </ul>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          The existing brand guideline doc lists hex values but does not publish RGB, CMYK, Pantone
          equivalents, or accessibility contrast guidance. Recommend adding all four for print and
          digital teams. Contrast ratios should be checked against WCAG 2.1 AA for every text /
          background pairing used in production.
        </Callout>
      </section>
    </BrandFrame>
  );
}
