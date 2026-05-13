import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
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

export default async function CaseStudiesPage() {
  const configured = isSanityConfigured();
  const items = configured ? await fetchCaseStudies() : [];

  return (
    <BrandFrame brand="aqualogic">
      <PageHeader
        eyebrow="Case studies"
        title="Case study library."
        lede="Submitted and approved case studies from across Aqualogic. Used by Alchemy to feed social, the website and sales materials."
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
              Open Studio (Alchemy)
            </Link>
          )}
        </div>
      </PageHeader>

      {!configured ? (
        <section className="container-page pb-20">
          <Callout title="Sanity not configured" variant="flag">
            Case studies are stored in Sanity. Once the project ID and dataset are set in
            <code className="px-1 py-0.5 mx-1 bg-amber-100 rounded text-xs">.env.local</code>,
            submitted case studies will appear here and the Studio at
            <code className="px-1 py-0.5 mx-1 bg-amber-100 rounded text-xs">/studio</code> will
            become editable.
          </Callout>
        </section>
      ) : items.length === 0 ? (
        <section className="container-page pb-20">
          <p className="text-grey-graphite">No case studies have been submitted yet.</p>
        </section>
      ) : (
        <section className="container-page pb-20">
          <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((c) => (
              <li key={c._id} className="card">
                <div className="flex items-center justify-between mb-3">
                  <span className="pill capitalize">{c.status.replace(/-/g, ' ')}</span>
                  {c.serviceCategory && (
                    <span className="text-xs text-grey-graphite uppercase tracking-widest">
                      {c.serviceCategory.replace(/-/g, ' ')}
                    </span>
                  )}
                </div>
                <h2 className="h-sub text-aqualogic-ink">{c.title}</h2>
                <p className="text-sm text-grey-graphite mt-2">
                  {c.client}
                  {c.region ? ` • ${c.region}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </BrandFrame>
  );
}
