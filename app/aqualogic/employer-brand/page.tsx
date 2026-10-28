import Link from 'next/link';
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

const EB = '/assets/aqualogic/employer-brand';
const src = (path: string) => encodeURI(`${EB}/${path}`);

const frameworks = [
  {
    title: 'Values wheel',
    use: 'Light for posters, print and onboarding packs. Dark for event screens, presentations and digital displays.',
    file: 'values-framework/Values wheel/aqualogic_values-wheel_for-light-slides_transparent.svg'
  },
  {
    title: 'Value columns',
    use: 'Each value with its definition and behaviours side by side. Suits slides and documents.',
    file: 'values-framework/Value columns/aqualogic_value-columns_for-light-slides_transparent.svg'
  },
  {
    title: 'Connected flow',
    use: 'The five values as one connected line. Suits wide slides and screens.',
    file: 'values-framework/Connected flow/aqualogic_connected-flow_for-light-slides_transparent.svg'
  }
];

const valueIcons = ['Trust', 'Ingenuity', 'Excellence', 'Collaboration', 'Agility'];

const programmes = [
  {
    name: 'Celebrating Success Awards',
    body: 'Managers recognise colleagues for exceptional performance, above and beyond the norm.',
    file: 'programme-logos/Celebrating Success Awards/aqualogic_celebrating-success-awards_full-logo_for-light-backgrounds.svg'
  },
  {
    name: 'Values Awards',
    body: 'Quarterly nominations from all employees, with the Board choosing a winner for each value.',
    file: 'programme-logos/Values Awards/aqualogic_values-awards_full-logo_for-light-backgrounds.svg'
  },
  {
    name: 'Long Service Awards',
    body: 'Marking 5, 10, 15 and 20 years with Aqualogic. One mark, with a version for each milestone.',
    file: 'programme-logos/Long Service Awards/aqualogic_long-service-awards-10-years_full-logo_for-light-backgrounds.svg'
  },
  {
    name: 'Aqua Impact',
    body: 'Paid volunteering days for charities and community organisations, and wider social value work.',
    file: 'programme-logos/Aqua Impact/aqualogic_aqua-impact_full-logo_for-light-backgrounds.svg'
  },
  {
    name: 'Aqua View',
    body: 'The annual engagement survey, with the quarterly pulse survey, Aqua View Lite.',
    file: 'programme-logos/Aqua View/aqualogic_aqua-view_full-logo_for-light-backgrounds.svg'
  },
  {
    name: 'Aqua Connect',
    body: 'The twice-yearly all-staff meeting, one virtual and one in person.',
    file: 'programme-logos/Aqua Connect/aqualogic_aqua-connect_full-logo_for-light-backgrounds.svg'
  }
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

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Honest, not perfect</h2>
        <p className="body-prose mt-4 max-w-prose">
          The employer story needs to stay honest. Different parts of the business experience work
          differently, and growth is increasing the need for stronger systems, management
          consistency and clearer internal communication. The strongest direction is not to present
          Aqualogic as perfect &mdash; it is to present it as established, growing, human and full
          of opportunity.
        </p>
        <p className="body-prose mt-4 max-w-prose">
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

      <section className="container-page pb-20" aria-labelledby="eb-assets">
        <p className="eyebrow mb-3">Employer brand assets</p>
        <h2 id="eb-assets" className="h-section text-aqualogic-ink">
          The values framework and people programme.
        </h2>
        <p className="body-prose mt-4 max-w-prose">
          One family of artwork for the values and the people programme, built to be used in
          presentations, on the intranet, in email and in print. Every piece comes in versions for
          light and dark backgrounds. The behaviours behind the framework are on the{' '}
          <Link href="/aqualogic/values" className="text-aqualogic-cyan font-semibold hover:underline">
            values and behaviours
          </Link>{' '}
          page.
        </p>
        <div className="mt-6">
          <Link
            href="/aqualogic/downloads"
            className="inline-flex items-center gap-2 rounded-xl bg-aqualogic-ink text-white px-5 py-3 text-sm font-semibold hover:bg-aqualogic-cyan transition-colors"
          >
            Download the artwork
          </Link>
        </div>

        <h3 className="h-sub text-aqualogic-ink mt-14">Values framework</h3>
        <p className="text-sm text-grey-graphite mt-2 max-w-prose">
          Three formats of the same framework. Use whichever fits the space.
        </p>
        <ul role="list" className="mt-6 grid gap-5 lg:grid-cols-5">
          {frameworks.map((f, i) => (
            <li
              key={f.title}
              className={`card flex flex-col ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-3'}`}
            >
              <div
                className={`-mx-6 -mt-6 mb-5 rounded-t-2xl bg-grey-cloud/60 flex items-center justify-center p-6 ${
                  i === 0 ? 'h-80 lg:h-auto lg:flex-1' : 'h-56'
                }`}
              >
                <img
                  src={src(f.file)}
                  alt={`${f.title}: the five Aqualogic values and their behaviours`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="h-sub text-aqualogic-ink">{f.title}</h4>
              <p className="text-sm text-grey-arsenic mt-2 leading-relaxed">{f.use}</p>
            </li>
          ))}
        </ul>

        <h3 className="h-sub text-aqualogic-ink mt-14">Value icons</h3>
        <p className="text-sm text-grey-graphite mt-2 max-w-prose">
          One icon for each value. Use them to flag a value in a slide, a story or a nomination.
        </p>
        <ul role="list" className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {valueIcons.map((v) => (
            <li key={v} className="card flex flex-col items-center justify-center gap-4 py-8">
              <img
                src={src(`value-icons/${v}/aqualogic_${v.toLowerCase()}_icon-only_for-light-backgrounds.svg`)}
                alt=""
                className="h-20 w-20"
                loading="lazy"
              />
              <span className="h-sub text-aqualogic-ink">{v}</span>
            </li>
          ))}
        </ul>

        <h3 className="h-sub text-aqualogic-ink mt-14">People programme logos</h3>
        <p className="text-sm text-grey-graphite mt-2 max-w-prose">
          Six schemes, one family. Write the scheme names as two words: Aqua Impact, Aqua View and
          Aqua Connect.
        </p>
        <ul role="list" className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <li key={p.name} className="card flex flex-col">
              <div className="-mx-6 -mt-6 mb-5 h-44 rounded-t-2xl bg-grey-cloud/60 flex items-center justify-center p-6">
                <img
                  src={src(p.file)}
                  alt={`${p.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="h-sub text-aqualogic-ink">{p.name}</h4>
              <p className="text-sm text-grey-arsenic mt-2 leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </BrandFrame>
  );
}
