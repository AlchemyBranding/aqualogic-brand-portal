import Link from 'next/link';
import { brandMeta, type BrandKey } from '@/lib/brand-tokens';
import { BrandLogo } from '@/components/BrandLogo';
import { externalLinks } from '@/lib/external-links';

type Props = {
  brand: BrandKey;
  children: React.ReactNode;
  showFooter?: boolean;
};

const navByBrand: Record<BrandKey, { label: string; href: string }[]> = {
  aqualogic: [
    { label: 'Strategy', href: '/aqualogic/strategy' },
    { label: 'Positioning', href: '/aqualogic/positioning' },
    { label: 'Voice', href: '/aqualogic/voice' },
    { label: 'Visuals', href: '/aqualogic/visuals/logo' },
    { label: 'Downloads', href: '/aqualogic/downloads' }
  ],
  sustec: [
    { label: 'About', href: '/sustec/about' },
    { label: 'Architecture', href: '/sustec/architecture' },
    { label: 'Visuals', href: '/sustec/visuals/logo' },
    { label: 'Downloads', href: '/sustec/downloads' }
  ],
  group: [
    { label: 'Sustec', href: '/sustec' },
    { label: 'Aqualogic', href: '/aqualogic' },
    { label: 'LinkedIn', href: '/linkedin' },
    { label: 'Case studies', href: '/case-studies' }
  ]
};

export function BrandFrame({ brand, children, showFooter = true }: Props) {
  const meta = brandMeta[brand];
  const nav = navByBrand[brand];

  return (
    <div className={`${meta.bodyClass} min-h-screen flex flex-col bg-aqualogic-paper`}>
      <header className="border-b border-grey-smoke/60 bg-white/70 backdrop-blur">
        <div className="container-page flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="Sustec Group brand portal home"
              className="flex items-center gap-3 group"
            >
              {brand === 'aqualogic' ? (
                <BrandLogo brand="aqualogic" variant="mark" height={32} fallbackToText={false} />
              ) : null}
              <span className="eyebrow group-hover:text-aqualogic-ink transition">
                Sustec Group Brand Portal
              </span>
            </Link>
            {brand !== 'group' && (
              <>
                <span aria-hidden className="text-grey-steel">/</span>
                <Link
                  href={`/${brand}`}
                  className="text-sm font-semibold text-aqualogic-ink"
                >
                  {meta.name}
                </Link>
              </>
            )}
          </div>
          <nav aria-label="Brand navigation" className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-grey-graphite hover:text-aqualogic-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {showFooter && <BrandFooter brand={brand} />}
    </div>
  );
}

function BrandFooter({ brand }: { brand: BrandKey }) {
  return (
    <footer className="border-t border-grey-smoke/60 bg-white">
      <div className="container-page py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <p className="eyebrow mb-3">{brandMeta[brand].eyebrow}</p>
          <p className="text-grey-graphite">
            For internal use across {brandMeta[brand].name}. The portal is updated as the brand
            evolves.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Quick links</p>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-aqualogic-ink">Portal home</Link></li>
            <li><Link href="/sustec" className="hover:text-aqualogic-ink">Sustec</Link></li>
            <li><Link href="/aqualogic" className="hover:text-aqualogic-ink">Aqualogic</Link></li>
            <li><Link href="/linkedin" className="hover:text-aqualogic-ink">LinkedIn guidance</Link></li>
            <li><Link href="/case-studies" className="hover:text-aqualogic-ink">Case studies</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">External</p>
          <ul className="space-y-2 text-grey-graphite">
            <li>
              <a
                href={externalLinks.sustecWebsite.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqualogic-ink"
              >
                {externalLinks.sustecWebsite.label}
              </a>
            </li>
            <li>
              <a
                href={externalLinks.aqualogicWebsite.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqualogic-ink"
              >
                {externalLinks.aqualogicWebsite.label}
              </a>
            </li>
            <li>
              <a
                href={externalLinks.aqualogicLinkedIn.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqualogic-ink"
              >
                {externalLinks.aqualogicLinkedIn.label}
              </a>
            </li>
            <li>
              {externalLinks.intranet.label}{' '}
              <span className="pill ml-2">URL needed</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-grey-smoke/60">
        <div className="container-page py-4 text-xs text-grey-space flex justify-between">
          <span>&copy; Sustec Group. Internal brand portal.</span>
          <span>Maintained by Alchemy.</span>
        </div>
      </div>
    </footer>
  );
}
