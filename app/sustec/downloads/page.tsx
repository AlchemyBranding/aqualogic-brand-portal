import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { DownloadCard } from '@/components/DownloadCard';
import { getAssets } from '@/lib/assets';

export const metadata = { title: 'Downloads — Sustec' };

export default function SustecDownloads() {
  const logos = getAssets('assets/sustec/logos');
  const kit = getAssets('assets/sustec/marketing-kit');
  const banners = getAssets('assets/sustec/banners');
  const photos = getAssets('assets/sustec/photography');

  const groups = [
    { label: 'Logos', files: logos, empty: 'No logo files yet. See /sustec/visuals/logo for expected variants and naming.' },
    { label: 'Marketing kit', files: kit, empty: 'No decks, templates or brochures yet.' },
    { label: 'Banners', files: banners, empty: 'No LinkedIn banners or signatures yet.' },
    { label: 'Photography', files: photos, empty: 'No photography uploaded yet.' }
  ];

  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Downloads"
        title="Downloads."
        lede="All Sustec brand assets in one place. Files are read from the asset folders at build time, so anything dropped in appears automatically."
      />

      <div className="container-page pb-20 space-y-12">
        {groups.map((g) => (
          <section key={g.label}>
            <header className="mb-5 flex items-end justify-between">
              <h2 className="h-section text-aqualogic-ink">{g.label}</h2>
              <p className="text-sm text-grey-graphite">{g.files.length} file{g.files.length === 1 ? '' : 's'}</p>
            </header>
            {g.files.length === 0 ? (
              <p className="text-sm text-grey-space italic">{g.empty}</p>
            ) : (
              <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {g.files.map((f) => (
                  <li key={f.fileName}>
                    <DownloadCard
                      title={f.name}
                      description={f.variant ? `${f.variant} variant` : undefined}
                      asset={f}
                    />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </BrandFrame>
  );
}
