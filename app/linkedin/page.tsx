import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { DownloadCard } from '@/components/DownloadCard';
import { getAssets } from '@/lib/assets';
import { externalLinks } from '@/lib/external-links';

export const metadata = { title: 'LinkedIn guidance' };

// Sample professional headlines for personal profiles. None start with
// "I work..." per the strategy doc, all reference "a Sustec company",
// all fit comfortably inside LinkedIn's 220-character limit.
const headlineSamples = [
  {
    label: 'Client-facing and commercial roles',
    text: '[Role] at Aqualogic, a Sustec company. Helping water companies reduce waste, improve performance and strengthen resilience through integrated demand management.'
  },
  {
    label: 'Field, delivery and technical roles',
    text: '[Role] at Aqualogic, a Sustec company. Practical field delivery across the UK water network. Intelligent water conservation, from source to tap.'
  },
  {
    label: 'Leadership and senior roles',
    text: '[Role] at Aqualogic, a Sustec company. Driving integrated water conservation and demand management for UK water companies. Practical delivery, real outcomes.'
  },
  {
    label: 'Operations, data and technology',
    text: '[Role] at Aqualogic, a Sustec company. Network, customer-side, data and technology in one connected approach to water conservation and demand management.'
  }
];

const companyTagline = 'Intelligent water conservation. Integrated demand management. A Sustec company.';

const companyAbout = `Aqualogic is an integrated water conservation and demand management business, helping water companies reduce waste, improve performance and strengthen long-term resilience through connected network, customer and field-based delivery.

We work across the water journey, from source to tap, combining network expertise, customer-side delivery, data, technology and practical field capability. With more than two decades of sector experience and roots that go back to Flow Control in 1979, Aqualogic operates today as a growing UK business: large enough to compete seriously, agile enough to react faster than larger competitors, and trusted for delivery.

Aqualogic is a Sustec company. Sustec is the group brand behind a growing portfolio of operating businesses across water and sustainability sectors.

Get in touch about leakage detection, demand management, customer-side delivery, network support, data and technology, and water efficiency programmes.`;

export default function LinkedInGuidance() {
  const aqualogicBanners = getAssets('assets/aqualogic/banners');

  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs items={[{ label: 'Portal', href: '/' }, { label: 'LinkedIn guidance' }]} />
      <PageHeader
        eyebrow="LinkedIn guidance"
        title="LinkedIn guidance."
        lede="How the Aqualogic team should set up personal LinkedIn profiles, what headline to use, what banner to upload, and how to tag the company page. Plus the approved treatment for the Aqualogic LinkedIn company page itself."
      >
        <Callout title="Aqualogic only" variant="note">
          This guidance covers the Aqualogic brand. Sustec is the group brand and does not have a
          public LinkedIn presence, so it is not used on personal profiles or in tagging.
        </Callout>
      </PageHeader>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Setting up your personal profile</h2>
        <ol className="mt-6 space-y-4 max-w-prose list-decimal pl-6 body-prose">
          <li>
            <strong>Profile photo.</strong> A clear, well-lit headshot. It does not need to be a
            formal studio shot, but it should look like you in a working context.
          </li>
          <li>
            <strong>Banner.</strong> Use one of the approved Aqualogic banners below
            (1584&times;396&nbsp;px). Do not crop another image or use a personal photo.
          </li>
          <li>
            <strong>Professional headline.</strong> See the samples below. Lead with your role and
            Aqualogic, not with &ldquo;I work...&rdquo;.
          </li>
          <li>
            <strong>Experience.</strong> Make sure your current role at Aqualogic is linked to the
            Aqualogic company page, not typed as plain text.
          </li>
          <li>
            <strong>Activity.</strong> Reshare Aqualogic posts with a personal comment where it
            adds something. Tag the Aqualogic company page when posting Aqualogic-related work.
          </li>
        </ol>
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Professional headline samples</h2>
        <p className="text-sm text-grey-graphite mt-2 max-w-prose">
          LinkedIn caps the professional headline at <strong>220 characters</strong>. Use these as a
          starting point, then adapt to your role. The tone should feel clear, confident, practical
          and human, the same tone Aqualogic uses everywhere else.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {headlineSamples.map((h) => (
            <article key={h.label} className="card">
              <p className="eyebrow mb-3">{h.label}</p>
              <p className="body-prose text-sm leading-relaxed">{h.text}</p>
              <p className="mt-4 text-xs text-grey-space font-mono">
                {h.text.length} / 220 characters
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-grey-graphite max-w-prose">
          The personal bio (the &ldquo;About&rdquo; section on your LinkedIn profile) is yours to
          write. It should still sound like Aqualogic, but specific guidance on personal bios is
          outside the scope of this portal.
        </p>
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Tagging guidance</h2>
        <ul className="body-prose mt-4 space-y-3 max-w-prose">
          <li>
            When mentioning Aqualogic in a post, tag the Aqualogic company page (LinkedIn will
            autocomplete it). Do not type &ldquo;Aqualogic&rdquo; as plain text.
          </li>
          <li>
            For sector posts (e.g. AMP8 commentary, water efficiency news), tag relevant sector
            bodies and water companies sparingly &mdash; only where you have a genuine connection
            or substantive comment.
          </li>
          <li>
            Do not tag company pages to chase impressions. The tone should match the brand:
            confident, not noisy.
          </li>
        </ul>
        <p className="mt-6 text-sm text-grey-graphite max-w-prose">
          The Aqualogic LinkedIn page is here:{' '}
          <a
            href={externalLinks.aqualogicLinkedIn.href}
            target="_blank"
            rel="noreferrer"
            className="text-aqualogic-cyan underline-offset-2 hover:underline break-all"
          >
            {externalLinks.aqualogicLinkedIn.href}
          </a>
        </p>
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Banner downloads</h2>
        <p className="text-sm text-grey-graphite mt-2 max-w-prose">
          Alchemy has supplied approved Aqualogic LinkedIn banners for the team to use. Download
          the appropriate file below. Sized to LinkedIn&rsquo;s personal-profile spec of
          1584&times;396&nbsp;px.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {aqualogicBanners.length === 0 ? (
            <DownloadCard
              title="Aqualogic LinkedIn banner"
              description="1584×396 px. Approved Aqualogic banner for personal profiles."
              comingSoon
            />
          ) : (
            aqualogicBanners.map((b) => (
              <DownloadCard
                key={b.fileName}
                title={b.name}
                description="Approved Aqualogic LinkedIn banner. 1584×396 px."
                asset={b}
              />
            ))
          )}
        </div>
        {aqualogicBanners.length === 0 && (
          <Callout title="Awaiting artwork" variant="flag">
            Drop final banner artwork into
            <code className="px-1 py-0.5 mx-1 bg-amber-100 rounded text-xs">/public/assets/aqualogic/banners</code>
            and it will appear here automatically.
          </Callout>
        )}
      </section>

      <section className="bg-aqualogic-ink text-white">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-prose">
            <p className="eyebrow text-aqualogic-sky mb-3">Company page treatment</p>
            <h2 className="h-section text-white">Aqualogic LinkedIn page</h2>
            <p className="lede text-aqualogic-sky/90 mt-4">
              Approved copy for the Aqualogic LinkedIn company page. This is the page personal
              profiles should be linked to and tagged. It refers to Aqualogic as a Sustec company,
              consistent with the brand architecture.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs text-aqualogic-sky font-semibold tracking-widest">TAGLINE</p>
              <p className="mt-3 text-white text-lg leading-snug">{companyTagline}</p>
              <p className="mt-4 text-xs text-aqualogic-sky/80 font-mono">
                {companyTagline.length} / 120 characters
              </p>
            </article>

            <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs text-aqualogic-sky font-semibold tracking-widest">
                ABOUT / BIO COPY
              </p>
              <p className="mt-3 text-white text-sm leading-relaxed whitespace-pre-line">
                {companyAbout}
              </p>
              <p className="mt-4 text-xs text-aqualogic-sky/80 font-mono">
                {companyAbout.length} / 2000 characters
              </p>
            </article>
          </div>

          <p className="mt-10 text-sm text-aqualogic-sky/90 max-w-prose">
            For the company page banner, use the same approved 1584&times;396&nbsp;px banner
            supplied above. LinkedIn applies the same dimensions for company and personal banners.
          </p>
        </div>
      </section>
    </BrandFrame>
  );
}
