import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Values and behaviours — Aqualogic' };

const values = [
  {
    name: 'Trust',
    statement: 'We build confidence through transparency, reliability and doing what we say we will do.',
    behaviours: ['Transparency', 'Accountability', 'Honesty', 'Dependability'],
    note: 'Externally, clients need confidence in delivery, reliability and accountability. Internally, a growing business needs transparency and consistency.'
  },
  {
    name: 'Ingenuity',
    statement: 'We think practically, adapt intelligently and solve problems in ways that create better outcomes.',
    behaviours: ['Curiosity', 'Adaptability', 'Practical problem-solving', 'Improvement'],
    note: 'Stronger than generic innovation language. Captures how the business thinks, adapts and approaches problems in practice.'
  },
  {
    name: 'Excellence',
    statement: 'We set high standards, take pride in our work and deliver with consistency, care and quality.',
    behaviours: ['Quality', 'Consistency', 'Ownership', 'Attention to detail'],
    note: 'Reinforces that the business expects a high standard from itself. Anchors performance, professionalism and pride in delivery.'
  },
  {
    name: 'Collaboration',
    statement: 'We work openly, support one another and build strong relationships that make us better together.',
    behaviours: ['Openness', 'Support', 'Teamwork', 'Respect', 'Knowledge-sharing'],
    note: 'Reflects how the business works at its best. A more open and informal culture than larger corporates, with people wanting to work together rather than hide behind hierarchy.'
  },
  {
    name: 'Agility',
    statement: 'We stay responsive, adaptable and ready to move, so we can deliver where it matters most.',
    behaviours: ['Responsiveness', 'Flexibility', 'Pace', 'Willingness to act'],
    note: 'One of Aqualogic’s clearest commercial and cultural differentiators. Large enough to compete seriously, agile enough to react, support and move faster than more corporate competitors.'
  }
];

export default function Values() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Values and behaviours' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Values and behaviours"
        title="Values and behaviours."
        lede="Values matter because they turn the brand from something Aqualogic says into something the business does. Behaviours are the practical expression of those values. Values set the standard. Behaviours make the standard visible."
      />

      <section className="container-page pb-12">
        <h2 className="h-section text-aqualogic-ink">How to use them</h2>
        <p className="body-prose mt-4 max-w-prose">
          As operating tools, not decorative language. Use them to shape recruitment, leadership,
          development, recognition and internal communication. In marketing, the values should act
          as tone and content filters &mdash; Trust through proof-led communication, Ingenuity
          through problem-solving and improvement stories, Excellence through delivery standards,
          Collaboration through team and client stories, Agility through responsiveness and pace.
        </p>
        <h2 className="h-section text-aqualogic-ink mt-10">Why this set works</h2>
        <p className="body-prose mt-4 max-w-prose">
          This set balances external credibility with internal truth. Trust, Ingenuity and
          Excellence give Aqualogic a strong core around confidence, thinking and standards.
          Collaboration and Agility add the cultural and commercial qualities that make the
          business feel distinct in practice. Together, they reflect both what Aqualogic wants to
          be known for and how it wants to operate.
        </p>
      </section>

      <section className="container-page pb-20 grid gap-6 md:grid-cols-2">
        {values.map((v) => (
          <article key={v.name} className="card flex flex-col">
            <p className="eyebrow text-aqualogic-cyan mb-3">Value</p>
            <h2 className="text-3xl font-extrabold text-aqualogic-ink">{v.name}</h2>
            <p className="mt-4 text-aqualogic-ink font-medium leading-snug">
              &ldquo;{v.statement}&rdquo;
            </p>
            <p className="eyebrow mt-6 mb-2">Behaviours</p>
            <ul className="flex flex-wrap gap-2">
              {v.behaviours.map((b) => (
                <li key={b} className="pill">
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-grey-graphite leading-relaxed">{v.note}</p>
          </article>
        ))}
      </section>

    </BrandFrame>
  );
}
