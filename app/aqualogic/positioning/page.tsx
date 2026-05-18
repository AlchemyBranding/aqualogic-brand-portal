import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Positioning and strapline — Aqualogic' };

const howToUse = [
  'Use as the narrative spine of the website and About page.',
  'Bring service architecture up into this position rather than fragmenting the offer.',
  'Use the shorter version in tender language, decks and induction materials.',
  'Use the alternative version where more explanation is needed.',
  'Frame case studies around outcomes: water saved, resilience improved, performance strengthened.',
  'The point is not exact word-for-word recitation. The point is that Aqualogic sounds like one company, not five different versions of itself.'
];

const whyItWorks = [
  'Rooted in the company’s origins in water conservation.',
  'Connects heritage with the shape of the business today.',
  'Makes room for both network and customer-side capability.',
  'Reflects the way the company solves connected, rather than isolated, problems.',
  'Broad enough to hold current services and future growth without rewriting.',
  'Commercially useful: easier to place, explain and differentiate.'
];

const straplineUse = [
  'Sit it above the wider messaging system, alongside the positioning statement.',
  'Use consistently across website, company overview material, presentation decks and selected branded assets.',
  'Visible enough to reinforce one clear idea over time. Not forced into every paragraph of copy.',
  'The positioning statement explains the business in more detail; the strapline gives the brand a memorable shorthand.'
];

export default function Positioning() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Positioning and strapline' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Positioning and strapline"
        title="Positioning and strapline."
        lede="Positioning is the clearest expression of what Aqualogic is in the market, what role it plays, and why that role matters. The strapline is the shortest, most repeatable form of that idea — a verbal signature that should be used consistently across the business."
      />

      <section className="container-page pb-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">How to use it</h2>
          <ul className="mt-5 space-y-3 text-grey-arsenic leading-relaxed">
            {howToUse.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-aqualogic-cyan shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">Why this works</h2>
          <ul className="mt-5 space-y-3 text-grey-arsenic leading-relaxed">
            {whyItWorks.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-aqualogic-cyan shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-4">Recommended positioning statement</p>
        <div className="rounded-3xl bg-aqualogic-ink text-white p-8 md:p-12 max-w-4xl">
          <p className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
            Aqualogic is an integrated water conservation and demand management business, helping
            water companies reduce waste, improve performance and strengthen long-term resilience
            through connected network, customer and field-based delivery.
          </p>
        </div>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-3">Alternative version</p>
        <p className="text-lg md:text-xl text-aqualogic-ink leading-relaxed max-w-4xl">
          Aqualogic helps water companies save water and strengthen resilience through integrated
          demand management, combining network expertise, customer-side delivery, data, technology
          and practical field capability across the water journey.
        </p>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-4">Strapline</p>
        <div className="rounded-3xl bg-aqualogic-cyan text-aqualogic-ink p-10 md:p-16 max-w-4xl">
          <p className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Intelligent water conservation.
          </p>
          <p className="mt-6 text-aqualogic-ink/80 max-w-prose">
            The shortest, most repeatable expression of the brand. Sits above the positioning
            statement and gives Aqualogic a clear verbal signature.
          </p>
        </div>
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">How to use the strapline</h2>
        <ul className="mt-5 space-y-3 text-grey-arsenic leading-relaxed max-w-prose">
          {straplineUse.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-aqualogic-cyan shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-grey-graphite max-w-prose">
          &ldquo;Smart Solutions, Clear Conservation&rdquo;, used in earlier brand documents,
          is superseded. The business needs one answer, not two.
        </p>
      </section>
    </BrandFrame>
  );
}
