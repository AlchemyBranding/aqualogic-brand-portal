import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { getReadClient, isSanityConfigured } from '@/lib/sanity-client';
import { CopyRow } from './CopyRow';

export const metadata = { title: 'Copy submissions — Aqualogic' };

export const revalidate = 30;

type Submission = {
  _id: string;
  _type: 'caseStudy' | 'newsArticle';
  title?: string;
  client?: string;
  source?: string;
  status?: string;
  submittedAt?: string;
  [key: string]: unknown;
};

async function fetchSubmissions(): Promise<Submission[]> {
  const client = getReadClient();
  if (!client) return [];
  const query = `*[_type in ["caseStudy", "newsArticle"]] | order(coalesce(submittedAt, _createdAt) desc) [0...100]`;
  try {
    return await client.fetch<Submission[]>(query);
  } catch {
    return [];
  }
}

export default async function CopySubmissionsPage() {
  const configured = isSanityConfigured();
  const items = configured ? await fetchSubmissions() : [];

  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs items={[{ label: 'Portal', href: '/' }, { label: 'Copy submissions' }]} />
      <PageHeader
        eyebrow="Rewrite workflow"
        title="Copy submissions for rewriting."
        lede="One-click copy of any submission as formatted markdown, ready to paste into a Claude project. Includes the title, client/source, all story sections, the quote and a media summary."
      />

      {!configured && (
        <section className="container-page pb-10">
          <Callout title="Sanity not configured" variant="note">
            Submissions will appear here once Sanity is connected.
          </Callout>
        </section>
      )}

      {configured && items.length === 0 && (
        <section className="container-page pb-10">
          <Callout title="No submissions yet" variant="note">
            Submissions made via the portal will appear here as soon as they land in Sanity.
          </Callout>
        </section>
      )}

      {items.length > 0 && (
        <section className="container-page pb-20">
          <ul role="list" className="grid gap-3">
            {items.map((item) => (
              <li key={item._id}>
                <CopyRow item={item} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </BrandFrame>
  );
}
