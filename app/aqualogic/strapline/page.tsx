import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';

export const metadata = { title: 'Strapline — Aqualogic' };

export default function Strapline() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Strapline' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Strapline"
        title="Strapline."
        lede="A strapline is the shortest and most repeatable expression of the brand. Its role is to give Aqualogic a clear verbal signature that can be used consistently across the business and recognised over time."
      />

      <section className="container-page pb-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">How to use it</h2>
          <ul className="body-prose mt-4 space-y-3 max-w-prose">
            <li>Sit it above the wider messaging system, alongside the positioning statement.</li>
            <li>Use consistently across website, company overview material, presentation decks and selected branded assets.</li>
            <li>Visible enough to reinforce one clear idea over time. Not forced into every paragraph of copy.</li>
            <li>The positioning statement explains the business in more detail; the strapline gives the brand a memorable shorthand.</li>
          </ul>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">Why this line</h2>
          <p className="body-prose mt-4 max-w-prose">
            It is simpler, clearer and more aligned with the direction of the business. It
            connects naturally to Aqualogic&rsquo;s roots in water conservation, its broader role
            in demand management, and the more joined-up position the business now needs to
            communicate. It already appears in the current rollout, which means it feels like a
            genuine evolution rather than a brand-new invention.
          </p>
        </div>
      </section>

      <section className="container-page pb-14">
        <div className="rounded-3xl bg-aqualogic-ink text-white p-10 md:p-16 max-w-4xl text-center">
          <p className="eyebrow text-aqualogic-sky mb-6">Lead strapline</p>
          <p className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Intelligent water conservation.
          </p>
        </div>
      </section>

      <section className="container-page pb-20">
        <Callout title="Replaces" variant="flag">
          &ldquo;Smart Solutions, Clear Conservation&rdquo;, used in earlier brand documents,
          is superseded. &ldquo;Smart solutions&rdquo; is widely used across sectors and
          &ldquo;clear conservation&rdquo; is less direct in meaning. The business needs one
          answer, not two.
        </Callout>
      </section>
    </BrandFrame>
  );
}
