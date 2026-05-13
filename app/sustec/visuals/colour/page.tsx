import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { SwatchGrid } from '@/components/SwatchGrid';
import { brandMeta } from '@/lib/brand-tokens';
import { Callout } from '@/components/Callout';

export const metadata = { title: 'Colour — Sustec' };

export default function SustecColour() {
  const meta = brandMeta.sustec;
  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Visuals / Colour"
        title="Colour."
        lede="The Sustec palette is built around Sustec Blue and a sustainability-cued green, balanced with black and a soft paper base. Use the blue as the primary brand colour and the green as a measured accent."
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
          <li><strong>Sustec Blue (#0092D2)</strong> &mdash; the primary brand colour. Use for the logo, key surfaces and headlines on Paper.</li>
          <li><strong>Sustec Green (#71D35F)</strong> &mdash; a signal colour used sparingly to highlight sustainability content or call attention to specific elements. Avoid as long-form text colour.</li>
          <li><strong>Black (#000000)</strong> &mdash; used in the wordmark and where a strong neutral is needed.</li>
          <li><strong>Paper (#FAFBFF)</strong> &mdash; the default background.</li>
        </ul>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          The Sustec guideline doc lists hex values only. RGB, CMYK and Pantone equivalents are
          missing, as is accessibility guidance. Recommend adding all of these (see
          Recommendations below) and verifying WCAG 2.1 AA contrast for every text / background
          pairing before publishing externally.
        </Callout>
      </section>
    </BrandFrame>
  );
}
