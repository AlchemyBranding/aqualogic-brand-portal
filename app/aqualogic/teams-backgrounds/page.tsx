import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { DownloadCard } from '@/components/DownloadCard';
import { getAssets } from '@/lib/assets';

export const metadata = { title: 'Teams backgrounds — Aqualogic' };
export const dynamic = 'force-static';
export const revalidate = false;

type BackgroundMeta = { title: string; description: string; order: number };

const BACKGROUND_RULES: { match: RegExp; meta: BackgroundMeta }[] = [
  {
    match: /ty-dwr-lounge/i,
    meta: { title: 'Tŷ Dŵr — Lounge', description: 'Aqualogic head office lounge. Warm, on-brand.', order: 1 }
  },
  {
    match: /ty-dwr-meeting-room/i,
    meta: { title: 'Tŷ Dŵr — Meeting room', description: 'Aqualogic head office meeting room. Confident, professional.', order: 2 }
  },
  {
    match: /photo/i,
    meta: { title: 'Photographic', description: 'Photographic scene. Best when you want a real-world backdrop.', order: 3 }
  },
  {
    match: /deep/i,
    meta: { title: 'Deep', description: 'Deep blue brand background. Strong contrast; good for daytime lighting.', order: 4 }
  },
  {
    match: /sky/i,
    meta: { title: 'Sky', description: 'Sky blue brand background. Bright and confident.', order: 5 }
  },
  {
    match: /paleblue/i,
    meta: { title: 'Pale blue', description: 'Softer blue variant. Calm, low-contrast.', order: 6 }
  },
  {
    match: /lightblue/i,
    meta: { title: 'Light blue', description: 'Light blue variant. Bright, everyday choice.', order: 7 }
  },
  {
    match: /paper/i,
    meta: { title: 'Paper', description: 'Neutral paper background. Warm, understated.', order: 8 }
  }
];

function metaFor(fileName: string): BackgroundMeta {
  const hit = BACKGROUND_RULES.find((r) => r.match.test(fileName));
  return hit?.meta ?? { title: fileName, description: 'Approved Aqualogic Teams background.', order: 99 };
}

export default function TeamsBackgrounds() {
  const files = getAssets('assets/aqualogic/teams-backgrounds');
  const sorted = [...files].sort(
    (a, b) => metaFor(a.fileName).order - metaFor(b.fileName).order
  );

  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Teams backgrounds' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / For internal teams"
        title="Teams backgrounds."
        lede="Approved Aqualogic backgrounds for Microsoft Teams video calls. Download any of the options below and add them to Teams from the meeting join screen or during a call."
      />

      <section className="container-page pb-10">
        <Callout title="Which one to use?" variant="note">
          <ul className="space-y-1 mt-1">
            <li>
              <strong>Client and external meetings</strong> — Tŷ Dŵr Lounge, Tŷ Dŵr Meeting
              Room or Photographic feel most professional and on-brand.
            </li>
            <li>
              <strong>Internal meetings</strong> — any of the coloured brand backgrounds (Deep,
              Sky, Pale Blue, Light Blue, Paper) work well and are easier on bandwidth.
            </li>
            <li>
              <strong>Bright rooms or backlit</strong> — the darker Deep background sits better
              against strong daylight than the pale variants.
            </li>
          </ul>
        </Callout>
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">How to add a Teams background</h2>
        <p className="text-grey-graphite mt-2 max-w-prose">
          These instructions work the same way whether you&rsquo;re on the Windows or Mac
          desktop app, Teams for the web, or the mobile app. You only need to upload each
          background once — Teams remembers it for future meetings.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-4xl">
          <div className="rounded-2xl border border-grey-smoke bg-white p-6">
            <h3 className="font-semibold text-aqualogic-ink">Before you join a meeting</h3>
            <ol className="mt-3 space-y-2 text-grey-arsenic list-decimal list-inside">
              <li>Download your chosen background (below) and save it somewhere you can find it.</li>
              <li>Start or join a Teams meeting. On the &ldquo;Choose your video and audio options&rdquo; screen, click <strong>Background filters</strong> (or <strong>Video effects</strong> on some versions).</li>
              <li>Scroll to the bottom of the backgrounds panel and click <strong>+ Add new</strong>.</li>
              <li>Select the downloaded image. It&rsquo;ll appear in the list — click it to apply.</li>
              <li>Join the meeting as normal.</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-grey-smoke bg-white p-6">
            <h3 className="font-semibold text-aqualogic-ink">During a meeting</h3>
            <ol className="mt-3 space-y-2 text-grey-arsenic list-decimal list-inside">
              <li>Click <strong>More</strong> (the three-dot menu) in the meeting toolbar.</li>
              <li>Choose <strong>Video effects and settings</strong> (or <strong>Apply background effects</strong>).</li>
              <li>Click <strong>+ Add new</strong>, pick the downloaded background, then click <strong>Apply</strong>.</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-grey-smoke bg-white p-6">
            <h3 className="font-semibold text-aqualogic-ink">On mobile (iOS or Android)</h3>
            <ol className="mt-3 space-y-2 text-grey-arsenic list-decimal list-inside">
              <li>Save the downloaded image to your phone&rsquo;s photo library.</li>
              <li>In the Teams meeting, tap the three-dot menu at the bottom.</li>
              <li>Tap <strong>Background effects</strong>, then the <strong>+</strong> button to upload from your photos.</li>
              <li>Select the image and tap <strong>Done</strong>.</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-grey-smoke bg-white p-6">
            <h3 className="font-semibold text-aqualogic-ink">Tips</h3>
            <ul className="mt-3 space-y-2 text-grey-arsenic list-disc list-inside">
              <li>Keep your camera roughly at eye level — the background sits best when your head is centred.</li>
              <li>Avoid strong backlighting (a window behind you). The blur along your edges gives it away.</li>
              <li>The Tŷ Dŵr Lounge / Meeting Room / Photographic options are best for external meetings. Coloured brand backgrounds are lower bandwidth and work for internal calls.</li>
              <li>If you don&rsquo;t see the background listed after upload, close Teams and re-open — occasionally the list needs a refresh.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <header className="mb-6 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="h-section text-aqualogic-ink">Downloads</h2>
            <p className="text-grey-graphite mt-2 max-w-prose">
              All backgrounds are supplied at 1920×1080 px, sized for standard 16:9 video.
            </p>
          </div>
          <p className="text-sm text-grey-graphite">
            {sorted.length} background{sorted.length === 1 ? '' : 's'}
          </p>
        </header>

        {sorted.length === 0 ? (
          <p className="text-sm text-grey-space italic">No backgrounds uploaded yet.</p>
        ) : (
          <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((f) => {
              const meta = metaFor(f.fileName);
              return (
                <li key={f.fileName}>
                  <DownloadCard title={meta.title} description={meta.description} asset={f} />
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </BrandFrame>
  );
}
