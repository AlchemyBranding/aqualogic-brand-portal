import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { DownloadCard } from '@/components/DownloadCard';
import { getAssets } from '@/lib/assets';

export const metadata = { title: 'Downloads — Aqualogic' };

export default function AqualogicDownloads() {
  const logos = getAssets('assets/aqualogic/logos');
  const kit = getAssets('assets/aqualogic/marketing-kit');
  const banners = getAssets('assets/aqualogic/banners');
  const photos = getAssets('assets/aqualogic/photography');
  const icons = getAssets('assets/aqualogic/icons');

  const groups = [
    { label: 'Logos', files: logos, empty: 'No logo files yet. See /aqualogic/visuals/logo for expected variants and naming.' },
    { label: 'Marketing kit', files: kit, empty: 'No decks, templates or one-pagers yet.' },
    { label: 'Banners', files: banners, empty: 'No LinkedIn banners or signatures yet.' },
    { label: 'Photography', files: photos, empty: 'No photography uploaded yet. Add via /admin/upload (Sanity).' },
    { label: 'Icons', files: icons, empty: 'No icon system defined yet. See Recommendations.' }
  ];

  return (
    <BrandFrame brand="aqualogic">
      <PageHeader
        eyebrow="Aqualogic / Downloads"
        title="Downloads."
        lede="All Aqualogic brand assets in one place. Files are read from the asset folders at build time, so anything dropped in appears automatically with no code changes."
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
