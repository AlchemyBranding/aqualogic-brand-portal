import type { AssetFile } from '@/lib/assets';
import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { DownloadSection } from '@/components/DownloadSection';
import { getAssets } from '@/lib/assets';

export const metadata = { title: 'Aqua Summit 2026 photography — Aqualogic' };
export const dynamic = 'force-static';
export const revalidate = false;

const ROOT = 'assets/aqualogic/aqua-summit-2026';

// Files are named aqua-summit-2026-<photographer's frame number>.jpg, so
// sorting by that number keeps the order of the day.
function frameNumber(file: AssetFile) {
  const m = file.fileName.match(/(\d+)\.jpg$/i);
  return m ? Number(m[1]) : 0;
}

function loadCategory(folder: string) {
  return getAssets(`${ROOT}/${folder}`)
    .filter((f) => f.ext === 'jpg')
    .sort((a, b) => frameNumber(a) - frameNumber(b));
}

export default function AquaSummit2026() {
  const candids = loadCategory('candids');
  const headshots = loadCategory('headshots');

  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Aqua Summit 2026' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / For internal teams"
        title="Aqua Summit 2026."
        lede="Photography from Aqua Summit 2026. Click any photo to open it full size, or use the download button to save a copy."
      />

      <section className="container-page pb-8">
        <p className="text-sm text-grey-graphite max-w-prose">
          Photography by Clearcut Social. Every photo is 1600 px on its longest side, which suits
          presentations, social posts, newsletters and the web.
        </p>
      </section>

      <div className="container-page pb-24 divide-y divide-grey-smoke">
        <DownloadSection label="Candids" count={candids.length} itemNoun="photo" defaultOpen>
          <PhotoGrid photos={candids} label="Aqua Summit 2026 candid photo" frame="square" />
        </DownloadSection>

        <DownloadSection
          label="Headshots"
          count={headshots.length}
          itemNoun="photo"
          note="Headshots are listed by photo number for now. Names will be added once they have been confirmed."
        >
          <PhotoGrid photos={headshots} label="Aqua Summit 2026 headshot" frame="portrait" />
        </DownloadSection>
      </div>
    </BrandFrame>
  );
}

// Most headshots are portrait, so they get a portrait frame aimed at the
// upper part of the photo; candids are a mix, so a square tile crops least.
const FRAMES = {
  square: { box: 'aspect-square', img: 'object-center' },
  portrait: { box: 'aspect-[4/5]', img: 'object-[50%_25%]' }
} as const;

function PhotoGrid({
  photos,
  label,
  frame
}: {
  photos: AssetFile[];
  label: string;
  frame: keyof typeof FRAMES;
}) {
  return (
    <ul role="list" className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-8">
      {photos.map((p) => {
        const n = frameNumber(p);
        const thumb = p.href.replace(/\/([^/]+)$/, '/thumbs/$1');
        return (
          <li key={p.href} className="relative group">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl overflow-hidden border border-grey-smoke focus-ring focus-visible:ring-aqualogic-cyan"
            >
              <div className={`${FRAMES[frame].box} bg-grey-cloud overflow-hidden`}>
                <img
                  src={thumb}
                  alt={`${label} ${n}`}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover ${FRAMES[frame].img} transition-transform duration-300 group-hover:scale-[1.03]`}
                />
              </div>
            </a>
            <div className="mt-1.5 flex items-center justify-between gap-2 text-xs text-grey-graphite">
              <span>Photo {n}</span>
              <a
                href={p.href}
                download={p.fileName}
                className="inline-flex items-center gap-1 font-semibold text-aqualogic-cyan hover:text-aqualogic-ink focus-ring rounded"
                aria-label={`Download photo ${n}`}
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 3v10M5.5 8.5 10 13l4.5-4.5M4 16.5h12" />
                </svg>
                Download
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
