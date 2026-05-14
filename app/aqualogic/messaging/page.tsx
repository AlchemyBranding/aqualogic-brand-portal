import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Messaging framework — Aqualogic' };

const pillars = [
  {
    title: 'Integrated water conservation',
    body:
      "The clearest expression of what makes Aqualogic different. The business is strongest when described as one joined-up company helping clients manage water demand more intelligently, rather than a list of separate teams or services. Carries the 'source to tap' and integrated demand management story."
  },
  {
    title: 'Practical delivery that makes a measurable difference',
    body:
      "Aqualogic is rooted in doing, not theorising. Reinforces that the company helps clients reduce waste, improve performance and solve operational problems through practical, real-world delivery. Anchored by proof: what problems the business solves and what evidence makes those claims credible."
  },
  {
    title: 'Trusted expertise with real depth',
    body:
      'Heritage, experience and long-standing sector knowledge, used as a credibility layer rather than nostalgia. Shows that Aqualogic’s capability has been built over time, that it is established rather than superficial, and that clients can trust it because the business understands the sector and delivers consistently.'
  },
  {
    title: 'Agile, responsive and easy to work with',
    body:
      'Agility is one of Aqualogic’s real commercial advantages. The business sees itself as being in a "sweet spot": big enough to compete seriously, but still agile enough to react, support and move more quickly than larger, more corporate competitors.'
  }
];

export default function Messaging() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Messaging framework' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Messaging framework"
        title="Messaging framework."
        lede="If positioning defines the space Aqualogic occupies, messaging defines the things the business needs people to understand, believe and remember. A clear hierarchy of what to say first, what to say next, and what proof needs to sit behind those claims."
      />

      <section className="container-page pb-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">How it works on the website</h2>
          <p className="body-prose mt-4">
            The homepage should lead with the core message and make the business easier to place
            immediately. Then use the pillars to guide the order in which the story unfolds: first
            establish Aqualogic as an integrated water conservation and demand management business,
            then show how that translates into practical delivery, then reinforce trust and
            credibility, and finally bring through the more human and agile side of the brand.
          </p>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">How it works in marketing</h2>
          <p className="body-prose mt-4">
            The framework should act as a filter rather than a script. Not every campaign, post or
            piece of content needs to repeat the same sentence, but everything should reinforce
            the same central story. Contract wins, case studies, thought leadership, recruitment
            content, leadership commentary and sector updates should all be linked back to one of
            the key pillars rather than being pushed out as isolated pieces of activity.
          </p>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="rounded-3xl bg-aqualogic-ink text-white p-8 md:p-12">
          <p className="eyebrow text-aqualogic-sky mb-4">Core message</p>
          <p className="text-2xl md:text-3xl font-semibold leading-snug max-w-4xl">
            Aqualogic helps water companies save water and strengthen resilience through integrated
            demand management, combining network expertise, customer-side delivery, data and
            practical field capability across the water journey.
          </p>
        </div>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-6">Supporting message pillars</p>
        <ol role="list" className="grid gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <li key={p.title} className="card flex flex-col">
              <p className="text-aqualogic-cyan font-mono font-bold tracking-tight">
                Pillar {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="h-sub mt-2 text-aqualogic-ink">{p.title}</h3>
              <p className="mt-3 text-sm text-grey-arsenic leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page pb-20">
        <p className="lede max-w-prose">
          Each pillar needs evidence behind it. Aqualogic has good work, strong delivery and
          hidden proof that is not yet being communicated consistently enough. The third layer of
          the framework is proof; use the case study repository to collect it.
        </p>
      </section>
    </BrandFrame>
  );
}
