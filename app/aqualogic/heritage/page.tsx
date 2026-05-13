import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Heritage — Aqualogic' };

const timeline = [
  {
    year: '1979',
    title: 'Flow Control',
    body: 'Originally a company called Flow Control, started by Mike Rice.'
  },
  {
    year: '2004',
    title: 'Aqualogic is born',
    body: 'Aqualogic was born out of a partial acquisition of Flow Control.'
  },
  {
    year: '2014',
    title: 'Major framework wins',
    body: 'Non-compete clause from acquisition expires. Aqualogic wins major UK framework tenders.'
  },
  {
    year: '2020',
    title: 'Digital and customer expansion',
    body: 'Continued growth in Field Services and client services across the UK water sector. Introduction of Virtual Water Audits and Digital Leakage detection.'
  },
  {
    year: '2025',
    title: 'MBO and Sustec',
    body: 'Aqualogic surpasses 250 employees and completes an MBO with Ben Rice and Ashley Williams purchasing the shareholding through a new holding company, Sustec Ltd (Sustainable Technologies Limited).'
  }
];

const useful = [
  'Roots in water conservation',
  'Long-term sector experience',
  'Practical innovation and technical evolution',
  'Growth into a broader, more integrated business',
  'A clear transition into a new leadership and growth chapter'
];

export default function Heritage() {
  return (
    <BrandFrame brand="aqualogic">
      <PageHeader
        eyebrow="Aqualogic / Heritage"
        title="Heritage."
        lede="Aqualogic's heritage is one of its strongest credibility assets. What matters most is continuity: practical water conservation, reducing waste and solving real operational problems, evolved over time into a broader business spanning leak detection, technical services, pressure management, digital capability, water efficiency and demand management."
      />

      <section className="container-page pb-14">
        <ol role="list" className="relative space-y-8 border-l border-grey-smoke pl-8 ml-3">
          {timeline.map((t) => (
            <li key={t.year}>
              <span className="absolute -left-2.5 mt-2 h-5 w-5 rounded-full bg-aqualogic-cyan ring-4 ring-white" aria-hidden />
              <p className="font-mono text-aqualogic-cyan font-bold text-lg">{t.year}</p>
              <h3 className="h-sub mt-1 text-aqualogic-ink">{t.title}</h3>
              <p className="mt-2 text-grey-arsenic max-w-prose">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page pb-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">Why heritage matters now</h2>
          <p className="body-prose mt-4 max-w-prose">
            Aqualogic&rsquo;s roots are in practical water conservation, reducing waste and solving
            real operational problems. The business has changed significantly, but the underlying
            logic has stayed consistent: practical intervention, intelligent use of expertise, and
            a focus on measurable water-saving outcomes. The move from Flow Control into
            Aqualogic, the expansion into technical and utility services, and the more recent
            transition into a new chapter under Sustec all show a business that has developed over
            time without losing its core purpose.
          </p>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">The most useful parts of the heritage story</h2>
          <ul className="mt-4 space-y-2">
            {useful.map((u) => (
              <li key={u} className="flex gap-3 text-grey-arsenic">
                <span aria-hidden className="text-aqualogic-cyan mt-1.5 h-1.5 w-1.5 rounded-full bg-aqualogic-cyan shrink-0" />
                {u}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page pb-20 max-w-prose">
        <h2 className="h-section text-aqualogic-ink">How to use heritage</h2>
        <p className="body-prose mt-4">
          Use it as a credibility layer rather than a repeated headline. On the homepage, heritage
          should act as a trust signal. On the About page, the fuller story should be told
          properly. In recruitment, the story is not simply that Aqualogic has existed for a long
          time &mdash; it is that this is an established business with real roots, real credibility
          and a clear future.
        </p>
      </section>
    </BrandFrame>
  );
}
