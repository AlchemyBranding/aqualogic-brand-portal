import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { DownloadCard } from '@/components/DownloadCard';
import { DownloadSection } from '@/components/DownloadSection';
import { Callout } from '@/components/Callout';
import { getAssets } from '@/lib/assets';

export const metadata = { title: 'Downloads — Aqualogic' };

export default function AqualogicDownloads() {
  const logos = getAssets('assets/aqualogic/logos');
  const templates = getAssets('assets/aqualogic/templates');
  const banners = getAssets('assets/aqualogic/banners');
  const socialIcons = getAssets('assets/aqualogic/social-icons');
  const socialPosts = getAssets('assets/aqualogic/social-posts');
  const photos = getAssets('assets/aqualogic/photography');
  const headshots = getAssets('assets/aqualogic/headshots');
  const icons = getAssets('assets/aqualogic/icons');

  const groups = [
    {
      label: 'Logos',
      files: logos,
      note:
        'Use SVG for screens and vector destinations (decks, web, signage). Use PNG only where vector is not supported. See the logo guidelines for clearspace, minimum size and what not to do.',
      guideLink: { href: '/aqualogic/visuals/logo', label: 'Open logo guidelines' },
      empty: 'No logo files yet. Drop them into /public/assets/aqualogic/logos.'
    },
    {
      label: 'Templates',
      files: templates,
      note: 'Editable Word and PowerPoint templates — letterhead, reports, proposal and presentation decks — pre-set with Aqualogic brand styling. Download, then save your own copy.',
      empty: 'No templates yet.'
    },
    {
      label: 'Banners',
      files: banners,
      note: 'Approved banner artwork sized for LinkedIn (personal and company), X/Twitter, email headers, the website hero and the endorsement bar. Filename dimensions tell you which is which.',
      empty: 'No banners yet.'
    },
    {
      label: 'Social icons',
      files: socialIcons,
      note: 'Square avatars sized for LinkedIn and other social profile pictures (400×400 px). Reversed (on Ink) and on-white variants supplied.',
      empty: 'No social icons yet.'
    },
    {
      label: 'Social post examples',
      files: socialPosts,
      note: 'Finished post artwork that demonstrates how the brand applies across social. Use as reference for tone, hierarchy and layout, or download to reuse.',
      empty: 'No social post examples yet.'
    },
    {
      label: 'Photography',
      files: photos,
      empty: 'No photography uploaded yet.'
    },
    {
      label: 'Headshots',
      files: headshots,
      note: 'Approved leadership and team headshots, when supplied.',
      empty: 'No headshots uploaded yet. These will appear here once available.'
    },
    {
      label: 'Icons',
      files: icons,
      empty: 'No icon system defined yet.'
    }
  ];

  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Downloads' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Downloads"
        title="Downloads."
        lede="Approved Aqualogic brand assets for use by the business. Refer to the brand guidelines for correct logo, colour, typography and imagery usage."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/aqualogic/visuals/logo"
            className="inline-flex items-center gap-2 rounded-xl bg-aqualogic-ink text-white px-5 py-3 text-sm font-semibold hover:bg-aqualogic-cyan transition-colors"
          >
            Logo guidelines
          </Link>
          <Link
            href="/aqualogic/visuals/colour"
            className="inline-flex items-center gap-2 rounded-xl border border-aqualogic-ink text-aqualogic-ink px-5 py-3 text-sm font-semibold hover:bg-aqualogic-ink hover:text-white transition-colors"
          >
            Colour
          </Link>
          <Link
            href="/aqualogic/visuals/typography"
            className="inline-flex items-center gap-2 rounded-xl border border-aqualogic-ink text-aqualogic-ink px-5 py-3 text-sm font-semibold hover:bg-aqualogic-ink hover:text-white transition-colors"
          >
            Typography
          </Link>
        </div>
      </PageHeader>

      <section className="container-page pb-10">
        <Callout title="Quick recap" variant="note">
          <ul className="space-y-1 mt-1">
            <li>
              <strong>SVG</strong> &mdash; use for screen, decks, signage, anywhere vector is
              supported. Scales without loss.
            </li>
            <li>
              <strong>PNG</strong> &mdash; use only where vector is not supported. Reverse and
              white-only variants are supplied with transparent backgrounds so they can drag onto
              any colour surface.
            </li>
            <li>
              <strong>Reverse</strong> &mdash; for use on Ink, Black or other dark surfaces only.
              Not for placement on Paper.
            </li>
            <li>
              Keep clearspace around the lockup equal to the width of the letter &ldquo;u&rdquo;
              in the wordmark.
            </li>
          </ul>
        </Callout>
      </section>

      <div className="container-page pb-20 divide-y divide-grey-smoke">
        {groups.map((g) => (
          <DownloadSection
            key={g.label}
            label={g.label}
            count={g.files.length}
            note={g.note}
            guideLink={g.guideLink}
          >
            {g.files.length === 0 ? (
              <p className="text-sm text-grey-space italic">{g.empty}</p>
            ) : (
              <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {g.files.map((f) => (
                  <li key={f.fileName}>
                    <DownloadCard
                      title={f.name}
                      description={f.variant ? `${f.variant} variant` : undefined}
                      asset={f}
                    />
                  </li>
                ))}
              </ul>
            )}
          </DownloadSection>
        ))}
      </div>
    </BrandFrame>
  );
}
