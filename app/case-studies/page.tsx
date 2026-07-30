import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { getReadClient, isSanityConfigured } from '@/lib/sanity-client';

export const metadata = { title: 'Case studies — Aqualogic' };

export const revalidate = 60;

type CaseStudy = {
  _id: string;
  title: string;
  client: string;
  serviceCategory?: string;
  region?: string;
  status: string;
  submittedAt?: string;
};

// Example tiles shown when the library is empty, so the team can see how
// a submitted and published case study will appear.
type CaseStudyStatus = 'submitted' | 'rewriting' | 'in-wordpress' | 'live';

const examples: Array<{
  id: string;
  title: string;
  client: string;
  serviceCategory: string;
  region: string;
  status: CaseStudyStatus;
  summary: string;
}> = [
  {
    id: 'example-1',
    title: 'Smart metering rollout cuts unaccounted-for water by 14%',
    client: 'South West Water',
    serviceCategory: 'smart-metering',
    region: 'South West',
    status: 'live',
    summary:
      'A two-year programme deploying smart meters across a previously under-monitored network, with a clear before-and-after view of consumption and leakage.'
  },
  {
    id: 'example-2',
    title: 'Slow the Flow: 12,000 home audits delivered ahead of schedule',
    client: 'Southern Water',
    serviceCategory: 'demand-management',
    region: 'South East',
    status: 'in-wordpress',
    summary:
      'Coordinated home water-efficiency audits across two lots. Repeatable approach delivered on time with measurable demand reduction.'
  },
  {
    id: 'example-3',
    title: 'iQuarius leak detection finds non-visible losses in mature network',
    client: 'Bristol Water',
    serviceCategory: 'leakage-detection',
    region: 'South West',
    status: 'submitted',
    summary:
      'Data-led survey across a mature distribution network. Pinpointed losses that traditional methods had missed and prioritised them by impact.'
  }
];

export default async function CaseStudiesPage() {
  const configured = isSanityConfigured();
  const items = configured ? await fetchCaseStudies() : [];
  const showExamples = items.length === 0;

  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs items={[{ label: 'Portal', href: '/' }, { label: 'Case studies' }]} />
      <PageHeader
        eyebrow="Case studies"
        title="Case study library."
        lede="Submitted and approved Aqualogic case studies. These are used for website content, social content, email marketing and sales materials."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/case-studies/submit"
            className="inline-flex items-center gap-2 rounded-xl bg-aqualogic-ink text-white px-5 py-3 font-semibold hover:bg-aqualogic-cyan transition-colors"
          >
            Submit a case study
          </Link>
          {configured && (
            <Link
              href="/studio"
              className="text-sm font-semibold text-aqualogic-cyan hover:underline"
            >
              Open editorial workspace
            </Link>
          )}
        </div>
      </PageHeader>

      {!configured && (
        <section className="container-page pb-10">
          <Callout title="Library not yet live" variant="note">
            The repository will be live once Sanity is connected. Submissions made before then are
            captured locally. The examples below preview how submitted case studies appear.
          </Callout>
        </section>
      )}

      {showExamples && (
        <section className="container-page pb-20">
          <header className="mb-6">
            <p className="eyebrow mb-2">Example tiles</p>
            <p className="text-grey-graphite max-w-prose">
              A preview of how a submitted case study renders in the library. Real submissions
              replace these as soon as they come in.
            </p>
          </header>
          <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((c) => (
              <li key={c.id}>
                <CaseStudyTile item={c} isExample />
              </li>
            ))}
          </ul>
        </section>
      )}

      {!showExamples && (
        <section className="container-page pb-20">
          <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((c) => (
              <li key={c._id}>
                <CaseStudyTile
                  item={{
                    id: c._id,
                    title: c.title,
                    client: c.client,
                    serviceCategory: c.serviceCategory ?? '',
                    region: c.region ?? '',
                    status: normaliseStatus(c.status),
                    summary: ''
                  }}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </BrandFrame>
  );
}

async function fetchCaseStudies(): Promise<CaseStudy[]> {
  const client = getReadClient();
  if (!client) return [];
  const query = `*[_type == "caseStudy"] | order(coalesce(submittedAt, _createdAt) desc) [0...50] {
    _id, title, client, serviceCategory, region, status, submittedAt
  }`;
  try {
    return await client.fetch<CaseStudy[]>(query);
  } catch {
    return [];
  }
}

const STATUS_LABEL: Record<CaseStudyStatus, string> = {
  submitted: 'Submitted',
  rewriting: 'Rewriting',
  'in-wordpress': 'In WordPress draft',
  live: 'Live on website'
};

const STATUS_STYLE: Record<CaseStudyStatus, string> = {
  submitted: 'bg-amber-50 text-amber-900 border-amber-200',
  rewriting: 'bg-violet-50 text-violet-900 border-violet-200',
  'in-wordpress': 'bg-aqualogic-sky/15 text-aqualogic-ink border-aqualogic-sky/40',
  live: 'bg-emerald-50 text-emerald-900 border-emerald-200'
};

const LEGACY_STATUS_MAP: Record<string, CaseStudyStatus> = {
  'pending-review': 'submitted',
  approved: 'rewriting',
  published: 'live'
};

function normaliseStatus(value: string | undefined): CaseStudyStatus {
  if (!value) return 'submitted';
  if (value in STATUS_LABEL) return value as CaseStudyStatus;
  return LEGACY_STATUS_MAP[value] ?? 'submitted';
}

function CaseStudyTile({
  item,
  isExample = false
}: {
  item: {
    id: string;
    title: string;
    client: string;
    serviceCategory: string;
    region: string;
    status: CaseStudyStatus;
    summary: string;
  };
  isExample?: boolean;
}) {
  return (
    <article className="card flex flex-col h-full">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${STATUS_STYLE[item.status]}`}>
          {STATUS_LABEL[item.status]}
        </span>
        {item.serviceCategory && (
          <span className="text-xs text-grey-graphite uppercase tracking-widest">
            {item.serviceCategory.replace(/-/g, ' ')}
          </span>
        )}
      </div>
      {isExample && (
        <p className="eyebrow text-aqualogic-cyan mb-2">Example</p>
      )}
      <h2 className="h-sub text-aqualogic-ink leading-snug">{item.title}</h2>
      <p className="text-sm text-grey-graphite mt-2">
        {item.client}
        {item.region ? ` • ${item.region}` : ''}
      </p>
      {item.summary && (
        <p className="text-sm text-grey-arsenic mt-3 leading-relaxed">{item.summary}</p>
      )}
    </article>
  );
}
