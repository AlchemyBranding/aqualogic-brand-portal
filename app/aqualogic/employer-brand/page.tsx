import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Employer brand — Aqualogic' };

const ideas = [
  {
    title: 'Established',
    body: 'A business with real roots, a strong reputation and a clear track record. Heritage and continuity work hard here.'
  },
  {
    title: 'Growing',
    body: 'Visible momentum. Aqualogic is growing quickly, taking on more work and bringing in new people.'
  },
  {
    title: 'Human',
    body: 'A more human and practical culture than many larger competitors. Open, approachable, supportive, less hierarchical.'
  },
  {
    title: 'Full of opportunity',
    body: 'Visible opportunities for people to develop and progress. Real examples of progression from field-based roles into supervisory, project or management positions.'
  }
];

const themes = [
  'Employee stories and progression journeys',
  'Day-in-the-life content',
  'Local recruitment campaigns',
  'Leadership and team visibility',
  'Training and development content',
  'Stories about growth, new hubs and new teams',
  'Culture-led content supported by the survey findings',
  'Testimonials from current employees where strong feedback exists'
];

export default function EmployerBrand() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Employer brand' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Employer brand"
        title="Employer brand."
        lede="As Aqualogic grows, employer brand becomes more important because people need a clearer sense of what kind of business they are joining, how it works, what it stands for and what kind of opportunity it offers."
      />

      <section className="container-page pb-14">
        <p className="eyebrow mb-6">The employer story is built around four ideas</p>
        <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ideas.map((i) => (
            <li key={i.title} className="card">
              <h3 className="h-sub text-aqualogic-ink">{i.title}</h3>
              <p className="text-sm text-grey-arsenic mt-3 leading-relaxed">{i.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-14 max-w-prose">
        <h2 className="h-section text-aqualogic-ink">Honest, not perfect</h2>
        <p className="body-prose mt-4">
          The employer story needs to stay honest. Different parts of the business experience work
          differently, and growth is increasing the need for stronger systems, management
          consistency and clearer internal communication. The strongest direction is not to present
          Aqualogic as perfect &mdash; it is to present it as established, growing, human and full
          of opportunity.
        </p>
        <p className="body-prose mt-4">
          Career development came through as one of the most useful parts of the discussion, not
          because it was described in abstract terms, but because there were real examples to point
          to &mdash; engineers developing into project managers, supervisor roles being filled from
          within. Career paths are one of the most valuable employer-brand themes the business can
          use externally.
        </p>
      </section>

      <section className="container-page pb-20">
        <h2 className="h-section text-aqualogic-ink">Content themes</h2>
        <p className="body-prose mt-4 max-w-prose">
          Employer brand should not live only on the careers page. It needs to show up across
          marketing channels in ways that support recruitment and build wider confidence in the
          business.
        </p>
        <ul role="list" className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {themes.map((t) => (
            <li key={t} className="rounded-xl bg-grey-cloud/50 px-4 py-3 text-sm text-aqualogic-ink">
              {t}
            </li>
          ))}
        </ul>
      </section>
    </BrandFrame>
  );
}
