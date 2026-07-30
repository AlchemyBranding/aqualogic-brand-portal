import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { getReadClient, isSanityConfigured } from '@/lib/sanity-client';

export const metadata = { title: 'News — Aqualogic' };

export const revalidate = 60;

type NewsArticle = {
  _id: string;
  title: string;
  kind?: 'internal' | 'external';
  category?: string;
  source?: string;
  sourceUrl?: string;
  publicationDate?: string;
  summary?: string;
  status: string;
};

type NewsStatus = 'submitted' | 'rewriting' | 'in-wordpress' | 'live';

const examples: Array<{
  id: string;
  title: string;
  kind: 'internal' | 'external';
  category: string;
  source: string;
  sourceUrl?: string;
  publicationDate: string;
  summary: string;
  status: NewsStatus;
}> = [
  {
    id: 'example-1',
    title: 'Aqualogic wins HWI smart-meter installation framework',
    kind: 'internal',
    category: 'company-news',
    source: 'Aqualogic press release',
    publicationDate: '2026-03-12',
    status: 'live',
    summary:
      'A new four-year framework with Horizon Water Infrastructure adds material capacity to the smart metering programme and extends Aqualogic’s national footprint.'
  },
  {
    id: 'example-2',
    title: 'AMP8 and the integrated approach: why fragmented delivery falls short',
    kind: 'internal',
    category: 'thought-leadership',
    source: 'Water Magazine',
    sourceUrl: 'https://example.com/water-magazine/amp8-integrated',
    publicationDate: '2026-02-04',
    status: 'in-wordpress',
    summary:
      'A sector commentary on why the integrated water conservation and demand management approach lands harder on regulator targets than service-by-service procurement.'
  },
  {
    id: 'example-3',
    title: 'Aqualogic profiled in Utility Week sustainability roundup',
    kind: 'external',
    category: 'sector',
    source: 'Utility Week',
    sourceUrl: 'https://example.com/utility-week',
    publicationDate: '2026-01-21',
    status: 'submitted',
    summary:
      'External coverage covering the role of integrated demand management businesses in the sector’s AMP8 ramp-up. Aqualogic featured alongside three other sector leaders.'
  }
];

const STATUS_LABEL: Record<NewsStatus, string> = {
  submitted: 'Submitted',
  rewriting: 'Rewriting',
  'in-wordpress': 'In WordPress draft',
  live: 'Live on website'
};
const STATUS_STYLE: Record<NewsStatus, string> = {
  submitted: 'bg-amber-50 text-amber-900 border-amber-200',
  rewriting: 'bg-violet-50 text-violet-900 border-violet-200',
  'in-wordpress': 'bg-aqualogic-sky/15 text-aqualogic-ink border-aqualogic-sky/40',
  live: 'bg-emerald-50 text-emerald-900 border-emerald-200'
};

const LEGACY_STATUS_MAP: Record<string, NewsStatus> = {
  'pending-review': 'submitted',
  approved: 'rewriting',
  published: 'live'
};

function normaliseStatus(value: string | undefined): NewsStatus {
  if (!value) return 'submitted';
  if (value in STATUS_LABEL) return value as NewsStatus;
  return LEGACY_STATUS_MAP[value] ?? 'submitted';
}

export default async function NewsPage() {
  const configured = isSanityConfigured();
  const items = configured ? await fetchNews() : [];
  const showExamples = items.length === 0;

  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs items={[{ label: 'Portal', href: '/' }, { label: 'News' }]} />
      <PageHeader
        eyebrow="News"
        title="News library."
        lede="Submitted and approved news articles, press releases, sector commentary and external coverage. Used for the Aqualogic website, social channels, email marketing and sales materials."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/news/submit"
            className="inline-flex items-center gap-2 rounded-xl bg-aqualogic-ink text-white px-5 py-3 font-semibold hover:bg-aqualogic-cyan transition-colors"
          >
            Submit a news article
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
            The repository will be live once Sanity is connected. Submissions made before then
            are captured locally. The examples below preview how submitted articles appear.
          </Callout>
        </section>
      )}

      {showExamples && (
        <section className="container-page pb-20">
          <header className="mb-6">
            <p className="eyebrow mb-2">Example tiles</p>
            <p className="text-grey-graphite max-w-prose">
              A preview of how submitted articles render in the library. Real submissions replace
              these as soon as they come in.
            </p>
          </header>
          <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((c) => (
              <li key={c.id}>
                <NewsTile item={c} isExample />
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
                <NewsTile
                  item={{
                    id: c._id,
                    title: c.title,
                    kind: (c.kind as 'internal' | 'external') ?? 'internal',
                    category: c.category ?? 'other',
                    source: c.source ?? '',
                    sourceUrl: c.sourceUrl,
                    publicationDate: c.publicationDate ?? '',
                    summary: c.summary ?? '',
                    status: normaliseStatus(c.status)
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

async function fetchNews(): Promise<NewsArticle[]> {
  const client = getReadClient();
  if (!client) return [];
  const query = `*[_type == "newsArticle"] | order(coalesce(publicationDate, submittedAt, _createdAt) desc) [0...50] {
    _id, title, kind, category, source, sourceUrl, publicationDate, summary, status
  }`;
  try {
    return await client.fetch<NewsArticle[]>(query);
  } catch {
    return [];
  }
}

function NewsTile({
  item,
  isExample = false
}: {
  item: {
    id: string;
    title: string;
    kind: 'internal' | 'external';
    category: string;
    source: string;
    sourceUrl?: string;
    publicationDate: string;
    summary: string;
    status: NewsStatus;
  };
  isExample?: boolean;
}) {
  const date = item.publicationDate
    ? new Date(item.publicationDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : '';
  return (
    <article className="card flex flex-col h-full">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${STATUS_STYLE[item.status]}`}
        >
          {STATUS_LABEL[item.status]}
        </span>
        {item.category && (
          <span className="text-xs text-grey-graphite uppercase tracking-widest">
            {item.category.replace(/-/g, ' ')}
          </span>
        )}
      </div>
      {isExample && <p className="eyebrow text-aqualogic-cyan mb-2">Example</p>}
      <h2 className="h-sub text-aqualogic-ink leading-snug">{item.title}</h2>
      <p className="text-sm text-grey-graphite mt-2">
        {item.kind === 'external' ? 'Coverage' : 'Internal'}
        {item.source ? ` • ${item.source}` : ''}
        {date ? ` • ${date}` : ''}
      </p>
      {item.summary && (
        <p className="text-sm text-grey-arsenic mt-3 leading-relaxed">{item.summary}</p>
      )}
      {item.sourceUrl && (
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 text-sm font-semibold text-aqualogic-cyan hover:underline"
        >
          Read at source &rarr;
        </a>
      )}
    </article>
  );
}
