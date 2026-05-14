import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';

export const metadata = { title: 'Imagery — Aqualogic' };

export default function AqualogicImagery() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Visuals' },
          { label: 'Imagery' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Visuals / Imagery"
        title="Imagery."
        lede="Photography should feel practical and real. Aqualogic is a doing business, not a glossy one. Imagery should show field work, sites, people and equipment with confidence and warmth."
      />

      <section className="container-page pb-14 grid md:grid-cols-2 gap-8">
        <article>
          <h2 className="h-section text-aqualogic-ink">Direction</h2>
          <ul className="body-prose mt-4 space-y-3 max-w-prose">
            <li>Real settings, real teams. Avoid heavily staged corporate stock.</li>
            <li>Light is natural where possible. Earthy, clear, not over-graded.</li>
            <li>Show the work: field crews, equipment, sites, meters, audits.</li>
            <li>Show the people: leadership, day-in-the-life, recruitment.</li>
            <li>Be representative of the regions where the business operates.</li>
          </ul>
        </article>
        <article>
          <h2 className="h-section text-aqualogic-ink">Avoid</h2>
          <ul className="body-prose mt-4 space-y-3 max-w-prose">
            <li>Generic stock imagery of water taps or shareholder handshakes.</li>
            <li>Heavy filters, vignettes or saturation that flatten the natural quality.</li>
            <li>Imagery that overstates innovation: avoid sci-fi tech aesthetics that the work itself does not look like.</li>
            <li>Posed group shots that feel like the &ldquo;before&rdquo; of a corporate website.</li>
          </ul>
        </article>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          The existing brand guideline doc does not include any photography direction. The
          guidance above is drawn from the strategy doc tone of voice (&ldquo;practical, grounded,
          human&rdquo;) rather than a published visual rule. Recommend a dedicated photography
          section in the brand book with do/don&rsquo;t examples once the library has been built up
          through the upload tool at
          <code className="px-1 py-0.5 mx-1 bg-amber-100 rounded text-xs">/admin/upload</code>.
        </Callout>
      </section>
    </BrandFrame>
  );
}
