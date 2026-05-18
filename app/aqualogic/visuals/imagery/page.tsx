import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { getAssets } from '@/lib/assets';

export const metadata = { title: 'Imagery — Aqualogic' };

export default function AqualogicImagery() {
  const photos = getAssets('assets/aqualogic/photography');

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
        <div>
          <h2 className="h-section text-aqualogic-ink">Direction</h2>
          <ul className="mt-4 space-y-3 text-grey-arsenic leading-relaxed">
            {[
              'Real settings, real teams. Avoid heavily staged corporate stock.',
              'Light is natural where possible. Earthy, clear, not over-graded.',
              'Show the work: field crews, equipment, sites, meters, audits.',
              'Show the people: leadership, day-in-the-life, recruitment.',
              'Be representative of the regions where the business operates.'
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-aqualogic-cyan shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">Avoid</h2>
          <ul className="mt-4 space-y-3 text-grey-arsenic leading-relaxed">
            {[
              'Generic stock imagery of water taps or shareholder handshakes.',
              'Heavy filters, vignettes or saturation that flatten the natural quality.',
              'Imagery that overstates innovation: avoid sci-fi tech aesthetics that the work itself does not look like.',
              'Posed group shots that feel like the “before” of a corporate website.'
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page pb-20">
        <header className="mb-6 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="h-section text-aqualogic-ink">Photography library</h2>
            <p className="text-grey-graphite mt-2 max-w-prose">
              Approved Aqualogic photography. As more photography is created, it will be added
              to the portal.
            </p>
          </div>
          <p className="text-sm text-grey-graphite">
            {photos.length} image{photos.length === 1 ? '' : 's'}
          </p>
        </header>

        {photos.length === 0 ? (
          <p className="text-sm text-grey-space italic">
            No photography uploaded yet.
          </p>
        ) : (
          <ul role="list" className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {photos.map((p) => (
              <li key={p.fileName}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block group rounded-xl overflow-hidden border border-grey-smoke focus-ring focus-visible:ring-aqualogic-cyan"
                >
                  <div className="aspect-square bg-grey-cloud overflow-hidden">
                    <img
                      src={p.href}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </BrandFrame>
  );
}
