import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { getAssets } from '@/lib/assets';
import { DownloadCard } from '@/components/DownloadCard';

export const metadata = { title: 'Logo — Sustec' };

export default function SustecLogo() {
  const logos = getAssets('assets/sustec/logos');
  const primary = logos.find((l) => l.variant === 'Primary');
  const mono = logos.find((l) => l.variant === 'Monochrome');
  const reverse = logos.find((l) => l.variant === 'Reverse');
  const mark = logos.find((l) => l.variant === 'Mark');

  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Visuals / Logo"
        title="Logo."
        lede="The Sustec logo identifies the group brand. It comes in a lockup form (symbol + wordmark) and a logo mark form (symbol only)."
      />

      <section className="container-page pb-14">
        <h2 className="eyebrow mb-6">Lockup and mark</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <article className="card">
            <h3 className="h-sub text-aqualogic-ink">Lockup logo</h3>
            <p className="text-sm text-grey-graphite mt-2">
              Default Sustec mark. Use across group communications, parent site, portfolio
              endorsement on operating brand assets.
            </p>
            <div className="mt-6 rounded-xl bg-grey-cloud/60 h-40 flex items-center justify-center text-grey-space text-sm italic">
              {primary ? 'Primary lockup' : 'Drop primary lockup into /public/assets/sustec/logos'}
            </div>
          </article>
          <article className="card">
            <h3 className="h-sub text-aqualogic-ink">Logo mark</h3>
            <p className="text-sm text-grey-graphite mt-2">
              Symbol only. Use where the brand context is already established.
            </p>
            <div className="mt-6 rounded-xl bg-grey-cloud/60 h-40 flex items-center justify-center text-grey-space text-sm italic">
              {mark ? 'Mark only' : 'Drop mark into /public/assets/sustec/logos with “mark” in the filename'}
            </div>
          </article>
        </div>
      </section>

      <section className="container-page pb-14 max-w-prose">
        <h2 className="h-section text-aqualogic-ink">Clearspace</h2>
        <p className="body-prose mt-4">
          Maintain clearspace so the logo never sits too close to the edge of a document or to
          other elements. The existing Sustec guideline document describes clearspace conceptually
          but does not publish a specific X-factor; recommend formalising this (see Recommendations
          below).
        </p>
      </section>

      <section className="container-page pb-14">
        <h2 className="eyebrow mb-6">Variants available in the portal</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <DownloadCard title="Primary (full colour)" description="Sustec Blue + Black." asset={primary} comingSoon={!primary} />
          <DownloadCard title="Monochrome" description="Single black. For one-colour applications." asset={mono} comingSoon={!mono} />
          <DownloadCard title="Reverse" description="White, for placement on dark backgrounds." asset={reverse} comingSoon={!reverse} />
        </div>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          The Sustec guideline doc covers lockup, mark and clearspace concepts but does not
          formally publish mono, reverse or single-colour variants. Recommend defining these and
          dropping the files into
          <code className="px-1 py-0.5 mx-1 bg-amber-100 rounded text-xs">/public/assets/sustec/logos</code>.
        </Callout>
      </section>
    </BrandFrame>
  );
}
