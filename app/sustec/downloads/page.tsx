import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { DownloadCard } from '@/components/DownloadCard';
import { DownloadSection } from '@/components/DownloadSection';
import { getAssets, type AssetFile } from '@/lib/assets';

export const metadata = { title: 'Downloads — Sustec' };

type DownloadGroup = { label: string; files: AssetFile[]; note?: string };

export default function SustecDownloads() {
  const logos = getAssets('assets/sustec/logos');
  const templates = getAssets('assets/sustec/templates');
  const banners = getAssets('assets/sustec/banners');
  const photos = getAssets('assets/sustec/photography');

  const groups: DownloadGroup[] = [
    { label: 'Logos', files: logos },
    {
      label: 'Templates',
      files: templates,
      note: 'Editable Word and PowerPoint templates set up with Sustec brand styling. Download, then save your own copy.'
    },
    { label: 'Banners', files: banners },
    { label: 'Photography', files: photos }
  ].filter((g) => g.files.length > 0);

  return (
    <BrandFrame brand="sustec">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Sustec', href: '/sustec' },
          { label: 'Downloads' }
        ]}
      />
      <PageHeader
        eyebrow="Sustec / Downloads"
        title="Downloads."
        lede="Approved Sustec brand assets for use by the business. Refer to the Sustec visual identity section for correct logo, colour and typography use."
      />

      <div className="container-page pb-20 divide-y divide-grey-smoke">
        {groups.map((g) => (
          <DownloadSection key={g.label} label={g.label} count={g.files.length} note={g.note}>
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
          </DownloadSection>
        ))}
      </div>
    </BrandFrame>
  );
}
