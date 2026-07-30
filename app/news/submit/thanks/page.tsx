import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = { title: 'News article submitted — Aqualogic' };

export default function NewsThanks() {
  return (
    <BrandFrame brand="aqualogic">
      <ScrollToTop />
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'News', href: '/news' },
          { label: 'Submitted' }
        ]}
      />
      <section className="container-page pt-16 md:pt-24 pb-12">
        <div className="max-w-3xl">
          <span
            aria-hidden
            className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-aqualogic-cyan/15 text-aqualogic-cyan"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <p className="eyebrow mt-6">News</p>
          <h1 className="h-display text-aqualogic-ink mt-3">Thank you.</h1>
          <p className="lede mt-6 max-w-prose">
            Your article has been submitted and is now in the news library as <strong>pending
            review</strong>. We&rsquo;ll review it shortly and use it across the website,
            social channels and email marketing.
          </p>
          <p className="text-sm text-grey-graphite mt-4 max-w-prose">
            Need to add another? Submit a separate entry for each article.
          </p>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          <Link
            href="/news/submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-aqualogic-ink text-white px-5 py-3 text-sm font-semibold hover:bg-aqualogic-cyan transition-colors"
          >
            Submit another article
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-aqualogic-ink text-aqualogic-ink px-5 py-3 text-sm font-semibold hover:bg-aqualogic-ink hover:text-white transition-colors"
          >
            View the news library
          </Link>
        </div>
      </section>
    </BrandFrame>
  );
}
