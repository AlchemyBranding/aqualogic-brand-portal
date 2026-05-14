import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { BrandLogo } from '@/components/BrandLogo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SwatchGrid } from '@/components/SwatchGrid';
import { HeritageTimeline } from '@/components/HeritageTimeline';
import { brandMeta } from '@/lib/brand-tokens';
import { getAssets } from '@/lib/assets';
import { DownloadCard } from '@/components/DownloadCard';

export const metadata = { title: 'Sustec — Brand portal' };

const sections = [
  { id: 'about', label: 'About' },
  { id: 'group-strategy', label: 'Group strategy' },
  { id: 'architecture', label: 'Brand architecture' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'visual-identity', label: 'Visual identity' },
  { id: 'downloads', label: 'Downloads' }
];

const buyAndBuild = [
  { label: 'Acquisition 1', body: 'Water consultancy with significant brand reputation. Targeted for Jan-27 inclusion.' },
  { label: 'Acquisition 2', body: 'Leakage technical services organisation with strong brand reputation. Targeted for Jan-27 inclusion.' },
  { label: 'Acquisition 3', body: 'Water repair and maintenance contractor. Sustec already holds a 20% equity stake. Envisaged Sept-27.' },
  { label: 'Acquisitions 4 & 5', body: 'A wastewater services provider and a similar-size competitor for market strengthening. Targets not yet identified.' }
];

export default function SustecHome() {
  const meta = brandMeta.sustec;
  const logos = getAssets('assets/sustec/logos');

  return (
    <BrandFrame brand="sustec">
      <Breadcrumbs items={[{ label: 'Portal', href: '/' }, { label: 'Sustec' }]} />

      <section className="container-page pt-10 pb-12">
        <p className="eyebrow mb-8 text-sustec-blue">Group brand</p>
        <h1 className="sr-only">Sustec</h1>
        <BrandLogo
          brand="sustec"
          variant="lockup"
          className="h-20 md:h-24 lg:h-32 w-auto"
          fallbackToText={true}
        />
        <p className="mt-8 max-w-prose lede">
          Sustec is the group brand. Its role is to support, connect and future-proof a portfolio
          of operating businesses, while allowing those businesses to retain their own market
          identity and specialist positioning.
        </p>
      </section>

      <section className="container-page pb-10">
        <nav aria-label="On this page" className="rounded-2xl border border-grey-smoke bg-white p-4 md:p-5">
          <ul role="list" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-aqualogic-ink">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-sustec-blue transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section id="about" className="container-page pb-16 scroll-mt-20">
        <p className="eyebrow mb-3 text-sustec-blue">01 — About</p>
        <h2 className="h-section text-aqualogic-ink">About Sustec.</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-10 body-prose">
          <p>
            Sustec (Sustainable Technologies Limited) is a holding and platform business behind a
            growing portfolio of operating companies, the first of which is Aqualogic. Sustec was
            created in 2025 through the management buy-out of Aqualogic by Ben Rice and Ashley
            Williams.
          </p>
          <p>
            Sustec is not a customer-facing operating brand. It does not deliver services
            directly. Its role is to set the architecture, support shared infrastructure
            (governance, finance, group leadership), enable group-level growth, and create
            credibility behind each operating business without overshadowing it.
          </p>
        </div>
      </section>

      <section id="group-strategy" className="bg-grey-cloud/40">
        <div className="container-page py-16 scroll-mt-20" id="group-strategy-inner">
          <p className="eyebrow mb-3 text-sustec-blue">02 — Group strategy</p>
          <h2 className="h-section text-aqualogic-ink">Group strategy.</h2>
          <p className="lede mt-3 max-w-prose">
            Sustec is the platform behind a deliberate buy-and-build strategy, targeting a group
            annual turnover of more than &pound;50m through three to five complementary SMEs in
            water and adjacent sectors.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="h-sub text-aqualogic-ink">Strategic intent</h3>
              <ul className="body-prose mt-3 space-y-2 max-w-prose">
                <li>Identify and engage complementary organisations.</li>
                <li>Acquire three to five SMEs.</li>
                <li>Target a group annual turnover greater than &pound;50m.</li>
                <li>Expand group services for added value.</li>
                <li>Diversify across sectors for risk mitigation.</li>
                <li>Maximise group cross-selling opportunities.</li>
                <li>Create a strategic circular economy.</li>
              </ul>
            </div>
            <div>
              <h3 className="h-sub text-aqualogic-ink">Market context (AMP8)</h3>
              <p className="body-prose mt-3 max-w-prose">
                The UK water sector has entered an unprecedented era of investment with PR24
                (2025&ndash;2030): around &pound;104bn approved, nearly double the previous AMP.
                Focus areas include drought resilience, sewage spill reduction, smart metering
                expansion, leakage detection and pressure management. This scale of investment
                creates space for complementary acquisitions across water services, wastewater,
                repair and maintenance, and adjacent renewables markets.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="eyebrow mb-4">Buy &amp; build pipeline</p>
            <ul role="list" className="grid gap-4 md:grid-cols-2">
              {buyAndBuild.map((a) => (
                <li key={a.label} className="rounded-2xl bg-white border border-grey-smoke p-5">
                  <p className="font-mono text-sustec-blue font-bold">{a.label}</p>
                  <p className="text-sm text-grey-arsenic mt-2 leading-relaxed">{a.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-grey-graphite">
              Pipeline detail is drawn from the Aqualogic Information Memorandum and is
              commercially sensitive. Internal use only.
            </p>
          </div>
        </div>
      </section>

      <section id="architecture" className="container-page py-16 scroll-mt-20">
        <p className="eyebrow mb-3 text-sustec-blue">03 — Brand architecture</p>
        <h2 className="h-section text-aqualogic-ink">Brand architecture.</h2>
        <div className="mt-6 rounded-3xl bg-aqualogic-ink text-white p-8 md:p-12 max-w-4xl">
          <p className="text-lg md:text-2xl font-semibold leading-snug">
            Sustec is the group brand. Its role is to support, connect and future-proof a
            portfolio of operating businesses, while allowing those businesses to retain their own
            market identity and specialist positioning.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="h-sub text-aqualogic-ink">How it works in practice</h3>
            <p className="body-prose mt-3 max-w-prose">
              Operating brands lead with their own stories, voice and customer-facing language.
              Sustec provides the group endorsement, the portfolio context and the platform behind
              them. The Aqualogic website should point up to Sustec as its parent; the Sustec
              website should point down to operating companies.
            </p>
          </div>
          <div>
            <h3 className="h-sub text-aqualogic-ink">Endorsement wording</h3>
            <p className="body-prose mt-3 max-w-prose">
              Where Sustec is referenced on operating-brand collateral, use a light endorsement:
            </p>
            <p className="mt-3 rounded-xl bg-grey-cloud/60 px-4 py-3 font-mono text-aqualogic-ink">
              Aqualogic, a Sustec company
            </p>
            <p className="mt-3 text-sm text-grey-graphite">
              Where Aqualogic is referenced on Sustec collateral:
            </p>
            <p className="mt-2 rounded-xl bg-grey-cloud/60 px-4 py-3 font-mono text-aqualogic-ink text-sm">
              Aqualogic is a Sustec company specialising in integrated water conservation and
              demand management.
            </p>
          </div>
        </div>
      </section>

      <section id="heritage" className="bg-grey-cloud/40">
        <div className="container-page py-16 scroll-mt-20">
          <p className="eyebrow mb-3 text-sustec-blue">04 — Heritage</p>
          <h2 className="h-section text-aqualogic-ink">Heritage.</h2>
          <p className="lede mt-3 max-w-prose">
            Sustec is new, but the businesses it supports are not. The group draws on decades of
            operational experience inside Aqualogic and brings that experience together under a
            structure built to scale.
          </p>
          <div className="mt-10">
            <HeritageTimeline brand="sustec" />
          </div>
        </div>
      </section>

      <section id="visual-identity" className="container-page py-16 scroll-mt-20">
        <p className="eyebrow mb-3 text-sustec-blue">05 — Visual identity</p>
        <h2 className="h-section text-aqualogic-ink">Visual identity.</h2>
        <p className="lede mt-3 max-w-prose">
          The Sustec brand uses a quieter, more architectural visual language than its operating
          companies. The shared typeface (Manrope) keeps the group feeling like a single system
          while colour and logo carry the distinct brand identities.
        </p>

        <div className="mt-12 grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <h3 className="h-sub text-aqualogic-ink">Logo</h3>
            <p className="body-prose mt-3">
              The Sustec lockup is used across group communications, the parent site, and as a
              supporting endorsement on operating-brand assets.
            </p>
            <p className="text-sm text-grey-graphite mt-3">
              Files appear in Downloads below once dropped into{' '}
              <code className="px-1 py-0.5 bg-grey-cloud rounded text-xs">/public/assets/sustec/logos</code>.
            </p>
          </div>
          <div className="rounded-2xl bg-grey-cloud/60 h-48 flex items-center justify-center">
            {logos.find((l) => l.variant === 'Primary') ? (
              <img
                src={logos.find((l) => l.variant === 'Primary')!.href}
                alt="Sustec logo"
                className="max-h-[70%] max-w-[70%] object-contain"
              />
            ) : (
              <span className="text-grey-space text-sm italic">Awaiting Sustec logo files</span>
            )}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="h-sub text-aqualogic-ink">Primary palette</h3>
          <div className="mt-4">
            <SwatchGrid swatches={meta.palette} columns={4} />
          </div>
        </div>

        <div className="mt-10">
          <h3 className="h-sub text-aqualogic-ink">Grayscale</h3>
          <div className="mt-4">
            <SwatchGrid swatches={meta.grayscale} columns={4} />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="h-sub text-aqualogic-ink">Typography</h3>
          <div className="mt-4 rounded-2xl bg-aqualogic-ink text-white p-8 md:p-10">
            <p className="text-7xl md:text-8xl leading-none font-extrabold tracking-tight">Aa</p>
            <p className="mt-4 text-aqualogic-sky text-lg">{meta.typeface.family}</p>
            <p className="text-aqualogic-sky/80 text-xs">{meta.typeface.source}</p>
          </div>
          <p className="body-prose mt-4 max-w-prose">
            Sustec uses Manrope, the same typeface family as Aqualogic, deliberately, so the
            group reads as one system. Colour and logo carry the distinct brand identities.
          </p>
        </div>
      </section>

      <section id="downloads" className="bg-grey-cloud/40">
        <div className="container-page py-16 scroll-mt-20">
          <p className="eyebrow mb-3 text-sustec-blue">06 — Downloads</p>
          <h2 className="h-section text-aqualogic-ink">Downloads.</h2>
          <p className="lede mt-3 max-w-prose">
            Approved Sustec brand assets. Files appear here automatically when dropped into the
            relevant <code className="px-1 py-0.5 bg-grey-cloud rounded text-xs">/public/assets/sustec</code> folder.
          </p>
          <div className="mt-8">
            <Link
              href="/sustec/downloads"
              className="inline-flex items-center gap-2 rounded-xl bg-sustec-blue text-white px-5 py-3 text-sm font-semibold hover:bg-sustec-green hover:text-aqualogic-ink transition-colors"
            >
              Open full downloads page
            </Link>
          </div>
        </div>
      </section>
    </BrandFrame>
  );
}
