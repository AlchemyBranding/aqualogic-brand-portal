import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';

export const metadata = { title: 'Positioning — Aqualogic' };

export default function Positioning() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Positioning' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Positioning"
        title="Positioning."
        lede="Positioning is the clearest expression of what Aqualogic is in the market, what role it plays, and why that role matters. It is the central idea that shapes how the business is understood externally."
      />

      <section className="container-page pb-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">How to use it</h2>
          <ul className="mt-5 space-y-3 text-grey-arsenic leading-relaxed">
            <li>Use as the narrative spine of the website and About page.</li>
            <li>Bring service architecture up into this position rather than fragmenting the offer.</li>
            <li>Use the shorter version in tender language, decks and induction materials.</li>
            <li>Use the longer version where more explanation is needed.</li>
            <li>Frame case studies around outcomes: water saved, resilience improved, performance strengthened.</li>
            <li>The point is not exact word-for-word recitation. The point is that Aqualogic sounds like one company, not five different versions of itself.</li>
          </ul>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">Why this works</h2>
          <ul className="mt-5 space-y-3 text-grey-arsenic leading-relaxed">
            <li>Rooted in the company&rsquo;s origins in water conservation.</li>
            <li>Connects heritage with the shape of the business today.</li>
            <li>Makes room for both network and customer-side capability.</li>
            <li>Reflects the way the company solves connected, rather than isolated, problems.</li>
            <li>Broad enough to hold current services and future growth without rewriting.</li>
            <li>Commercially useful: easier to place, explain and differentiate.</li>
          </ul>
        </div>
      </section>

      <section className="container-page pb-14">
        <div className="rounded-3xl bg-aqualogic-ink text-white p-8 md:p-12 max-w-4xl">
          <p className="eyebrow text-aqualogic-sky mb-4">Recommended positioning statement</p>
          <p className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
            Aqualogic is an integrated water conservation and demand management business, helping
            water companies reduce waste, improve performance and strengthen long-term resilience
            through connected network, customer and field-based delivery.
          </p>
        </div>
      </section>

      <section className="container-page pb-14 max-w-4xl">
        <p className="eyebrow mb-3">Longer version (for fuller explanation)</p>
        <p className="text-lg md:text-xl text-aqualogic-ink leading-relaxed">
          Aqualogic helps water companies save water and strengthen resilience through integrated
          demand management, combining network expertise, customer-side delivery, data, technology
          and practical field capability across the water journey.
        </p>
      </section>

      <section className="container-page pb-20">
        <Callout title="From the workshop" variant="quote">
          &ldquo;If you ask different people what Aqualogic is, you will get different answers
          back, and that inconsistency is feeding through into inductions, mobilisation and the
          wider language used across the business.&rdquo; The stronger story is that Aqualogic
          works across the water journey, connecting network-side and customer-side activity in a
          way many competitors do not. From source to tap.
        </Callout>
      </section>
    </BrandFrame>
  );
}
