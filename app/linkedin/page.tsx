import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { DownloadCard } from '@/components/DownloadCard';
import { getAssets } from '@/lib/assets';

export const metadata = { title: 'LinkedIn guidance' };

export default function LinkedInGuidance() {
  const aqualogicBanners = getAssets('assets/aqualogic/banners');
  const sustecBanners = getAssets('assets/sustec/banners');

  return (
    <BrandFrame brand="group">
      <PageHeader
        eyebrow="LinkedIn guidance"
        title="LinkedIn guidance."
        lede="How internal teams across Aqualogic and Sustec should set up their personal LinkedIn profiles, what to say in bios, what banners to use, and how to tag company pages so the brand looks consistent in the places it shows up most often."
      />

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Setting up your personal profile</h2>
        <ol className="mt-6 space-y-4 max-w-prose list-decimal pl-6 body-prose">
          <li>
            <strong>Profile photo.</strong> Use a clear, well-lit headshot. It does not need to be
            a formal studio shot, but it should look like you in a working context.
          </li>
          <li>
            <strong>Banner.</strong> Use one of the approved Aqualogic / Sustec banners below
            (when available). Banners are sized 1584&times;396px and should be exported as PNG or JPG.
          </li>
          <li>
            <strong>Headline.</strong> Lead with your role, then the company. Example:
            <em className="ml-1">Leakage Project Manager at Aqualogic</em>.
          </li>
          <li>
            <strong>About / Bio.</strong> Use the suggested copy below as a starting point and
            adapt it to your role.
          </li>
          <li>
            <strong>Experience.</strong> Make sure your current Aqualogic role is linked to the
            Aqualogic company page, not typed as plain text.
          </li>
          <li>
            <strong>Activity.</strong> Reshare Aqualogic and Sustec posts with a personal comment
            where relevant.
          </li>
        </ol>
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Suggested bio copy</h2>
        <p className="text-sm text-grey-graphite mt-2 max-w-prose">
          Use as a starting point. Adapt to your role, then keep it short. The tone should feel
          clear, confident, practical and human &mdash; the same tone the brand uses everywhere
          else.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <article className="card">
            <p className="eyebrow mb-3">Aqualogic &mdash; client-facing roles</p>
            <p className="body-prose whitespace-pre-line text-sm leading-relaxed">{`I work at Aqualogic, an integrated water conservation and demand management business helping water companies reduce waste, improve performance and strengthen long-term resilience.

My role is [short description of what you do day to day]. I work alongside [colleagues / teams / clients] on [type of work].

Aqualogic is a Sustec company. Always happy to talk about [topic relevant to your role].`}</p>
          </article>
          <article className="card">
            <p className="eyebrow mb-3">Aqualogic &mdash; field and delivery roles</p>
            <p className="body-prose whitespace-pre-line text-sm leading-relaxed">{`I&rsquo;m part of the field delivery team at Aqualogic, working on [leak detection / smart metering / network maintenance / water efficiency / etc].

We help water companies save water and improve performance through practical, on-the-ground work. Aqualogic is a Sustec company.

Open to conversations about water sector careers and the work we do.`}</p>
          </article>
        </div>
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Tagging guidance</h2>
        <ul className="body-prose mt-4 space-y-3 max-w-prose">
          <li>When mentioning Aqualogic in a post, tag the Aqualogic company page (LinkedIn will autocomplete it). Do not type &ldquo;Aqualogic&rdquo; as plain text.</li>
          <li>When the post is group-relevant (acquisitions, leadership announcements, group-level news), also tag the Sustec company page.</li>
          <li>For sector posts (e.g. AMP8 commentary, water efficiency news), tag relevant sector bodies and water companies sparingly &mdash; only where you have a genuine connection or comment.</li>
          <li>Do not tag company pages to chase impressions. The tone should match the brand: confident, not noisy.</li>
        </ul>
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Banner downloads</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <DownloadCard
            title="Aqualogic banner"
            description="1584×396px personal profile banner."
            asset={aqualogicBanners[0]}
            comingSoon={!aqualogicBanners[0]}
          />
          <DownloadCard
            title="Sustec banner"
            description="1584×396px personal profile banner."
            asset={sustecBanners[0]}
            comingSoon={!sustecBanners[0]}
          />
        </div>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          LinkedIn banners have not yet been created. Drop final artwork into
          <code className="px-1 py-0.5 mx-1 bg-amber-100 rounded text-xs">/public/assets/aqualogic/banners</code>
          and
          <code className="px-1 py-0.5 mx-1 bg-amber-100 rounded text-xs">/public/assets/sustec/banners</code>
          and they will appear here automatically.
        </Callout>
      </section>
    </BrandFrame>
  );
}
