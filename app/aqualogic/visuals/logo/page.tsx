import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { getAssets } from '@/lib/assets';
import { DownloadCard } from '@/components/DownloadCard';

export const metadata = { title: 'Logo — Aqualogic' };

export default function AqualogicLogo() {
  const logos = getAssets('assets/aqualogic/logos');
  const primary = logos.find((l) => l.variant === 'Primary');
  const mono = logos.find((l) => l.variant === 'Monochrome');
  const reverse = logos.find((l) => l.variant === 'Reverse');
  const mark = logos.find((l) => l.variant === 'Mark');

  return (
    <BrandFrame brand="aqualogic">
      <PageHeader
        eyebrow="Aqualogic / Visuals / Logo"
        title="Logo."
        lede="The Aqualogic logo is the primary mark of the business. It comes in a lockup form (symbol + wordmark) and a logo mark form (symbol only). Use it with consistent clearspace and adequate contrast."
      />

      <section className="container-page pb-14">
        <h2 className="eyebrow mb-6">Lockup and mark</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <article className="card">
            <h3 className="h-sub text-aqualogic-ink">Lockup logo</h3>
            <p className="text-sm text-grey-graphite mt-2">
              Symbol + wordmark together. Use this as the default in nearly all applications.
            </p>
            <div className="mt-6 rounded-xl bg-grey-cloud/60 h-40 flex items-center justify-center text-grey-space text-sm italic">
              {primary ? 'Primary lockup' : 'Drop primary lockup into /public/assets/aqualogic/logos'}
            </div>
          </article>
          <article className="card">
            <h3 className="h-sub text-aqualogic-ink">Logo mark</h3>
            <p className="text-sm text-grey-graphite mt-2">
              Symbol only. Use where space is constrained or where the brand is already established
              in context (social avatars, favicons, branded merchandise).
            </p>
            <div className="mt-6 rounded-xl bg-grey-cloud/60 h-40 flex items-center justify-center text-grey-space text-sm italic">
              {mark ? 'Mark only' : 'Drop mark into /public/assets/aqualogic/logos with “mark” in the filename'}
            </div>
          </article>
        </div>
      </section>

      <section className="container-page pb-14 max-w-prose">
        <h2 className="h-section text-aqualogic-ink">Clearspace</h2>
        <p className="body-prose mt-4">
          Ensure the logo is never placed too close to the edge of a document or to other elements.
          The X factor is measured using the width of the letter &ldquo;u&rdquo; from the logo and
          must be applied to all four sides. For the logo mark, half of the symbol defines the
          X factor.
        </p>
      </section>

      <section className="container-page pb-14">
        <h2 className="eyebrow mb-6">Variants available in the portal</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <DownloadCard
            title="Primary (full colour)"
            description="Aqua Cyan + Ink. Use on Paper or Cloud backgrounds."
            asset={primary}
            comingSoon={!primary}
          />
          <DownloadCard
            title="Monochrome"
            description="Single black or single Ink. Use where one-colour print is required."
            asset={mono}
            comingSoon={!mono}
          />
          <DownloadCard
            title="Reverse"
            description="White, for placement on Ink or Black backgrounds."
            asset={reverse}
            comingSoon={!reverse}
          />
        </div>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          The existing brand guideline doc defines the lockup and mark with clearspace rules,
          but does not formally publish mono, reverse or single-colour variants. Recommend adding
          these (see Recommendations below) and dropping the files into
          <code className="px-1 py-0.5 mx-1 bg-amber-100 rounded text-xs">/public/assets/aqualogic/logos</code>.
        </Callout>
      </section>
    </BrandFrame>
  );
}
