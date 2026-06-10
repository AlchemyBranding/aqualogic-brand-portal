import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { BrandLogo } from '@/components/BrandLogo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SwatchGrid } from '@/components/SwatchGrid';
import { HeritageTimeline } from '@/components/HeritageTimeline';
import { brandMeta } from '@/lib/brand-tokens';

export const metadata = { title: 'Sustec — Brand portal' };

const sections = [
  { id: 'about', label: 'About' },
  { id: 'strapline', label: 'Strapline' },
  { id: 'mission', label: 'Mission and purpose' },
  { id: 'group-strategy', label: 'Group strategy' },
  { id: 'architecture', label: 'Brand architecture' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'visual-identity', label: 'Visual identity' },
  { id: 'downloads', label: 'Downloads' }
];

const focusAreas = [
  { title: 'Water Efficiency and Smart Management', body: 'Demand management, leakage reduction, smart metering and customer-side delivery.' },
  { title: 'Building Performance Systems', body: 'Technology and services that lift the performance of buildings, networks and infrastructure.' },
  { title: 'Data-Driven Optimisation', body: 'Analytics, telemetry and intelligence layers that turn operational data into measurable outcomes.' },
  { title: 'Clean Energy and Renewables', body: 'Adjacent renewables markets including C&I solar, storage and flexibility.' }
];

const positioningLines = [
  'We don’t follow the transition to sustainable technologies. We help shape it.',
  'We help strong organisations become stronger.',
  'A collaborative model designed for impact — quietly building scale, resilience and long-term capability.',
  'Founded by experienced industry operators.'
];

export default function SustecHome() {
  const meta = brandMeta.sustec;

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
        <p className="mt-8 text-sustec-blue font-semibold text-xl tracking-tight">
          Renewables, Smarter.
        </p>
        <p className="mt-6 max-w-prose lede">
          A strategic clean-tech investment company shaping the future of water, energy and
          sustainable technologies. A UK-based investment and innovation platform focused on
          sustainability, efficiency and clean technology.
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
        <p className="eyebrow mb-3 text-sustec-blue">01 &mdash; About</p>
        <h2 className="h-section text-aqualogic-ink">About Sustec.</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-10 body-prose">
          <div className="space-y-5">
            <p>
              Sustec is the group brand. Its role is to support, connect and future-proof a
              portfolio of operating businesses, while allowing those businesses to retain their
              own market identity and specialist positioning.
            </p>
            <p>
              Sustec (Sustainable Technologies Limited) was created in 2025 through the management
              buy-out of Aqualogic by Ben Rice and Ashley Williams. It is the platform behind a
              deliberate buy-and-build strategy across water services, technical services,
              consultancy, repair and maintenance, wastewater services and adjacent sustainability
              markets.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              Sustec is not a customer-facing operating brand. It does not deliver services
              directly. Its role is to set the architecture, support shared infrastructure
              (governance, finance, group leadership), enable group-level growth, and create
              credibility behind each operating business without overshadowing it.
            </p>
            <ul className="space-y-2 text-grey-arsenic">
              {positioningLines.map((line) => (
                <li key={line} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sustec-green shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="strapline" className="bg-sustec-blue text-white">
        <div className="container-page py-16 scroll-mt-20 text-center">
          <p className="eyebrow text-white/70 mb-4">02 &mdash; Strapline</p>
          <p className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Renewables, Smarter.
          </p>
          <p className="mt-8 max-w-prose mx-auto text-white/90">
            A strategic clean-tech investment company shaping the future of water, energy and
            sustainable technologies.
          </p>
        </div>
      </section>

      <section id="mission" className="container-page py-16 scroll-mt-20">
        <p className="eyebrow mb-3 text-sustec-blue">03 &mdash; Mission and purpose</p>
        <h2 className="h-section text-aqualogic-ink">Mission and purpose.</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <article className="rounded-3xl bg-grey-cloud/40 p-8">
            <p className="eyebrow mb-3 text-sustec-blue">Mission</p>
            <p className="text-xl md:text-2xl font-semibold text-aqualogic-ink leading-snug">
              To elevate the performance of essential resources through intelligent investment,
              strategic alignment and a commitment to long-term impact.
            </p>
          </article>
          <article className="rounded-3xl bg-aqualogic-ink text-white p-8">
            <p className="eyebrow mb-3 text-sustec-green">Core purpose</p>
            <p className="text-xl md:text-2xl font-semibold leading-snug">
              To accelerate the adoption of sustainable technologies by investing in businesses
              that deliver measurable improvements in resource efficiency, environmental
              performance and operational excellence.
            </p>
          </article>
        </div>

        <div className="mt-12">
          <p className="eyebrow mb-4 text-sustec-blue">Investment focus areas</p>
          <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((a) => (
              <li key={a.title} className="rounded-2xl bg-white border border-grey-smoke p-5">
                <h3 className="font-semibold text-aqualogic-ink leading-snug">{a.title}</h3>
                <p className="text-sm text-grey-arsenic mt-2 leading-relaxed">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="group-strategy" className="bg-grey-cloud/40">
        <div className="container-page py-16 scroll-mt-20">
          <p className="eyebrow mb-3 text-sustec-blue">04 &mdash; Group strategy</p>
          <h2 className="h-section text-aqualogic-ink">Group strategy.</h2>
          <p className="lede mt-3 max-w-prose">
            Sustec is the platform for a deliberate buy-and-build strategy, focused on building a
            high-quality group with annual turnover exceeding &pound;50m through the acquisition
            of three to five complementary SMEs across water and adjacent sectors.
          </p>
          <p className="body-prose mt-5 max-w-prose">
            The approach is targeted and disciplined: identifying strong, well-run organisations
            with established reputations, and integrating them into a cohesive group that enhances
            overall capability, resilience, and market reach.
          </p>
          <p className="body-prose mt-4 max-w-prose">
            At its core, the strategy is about strengthening what already works: providing the
            structure, capital, and strategic direction to enable each business to scale,
            collaborate, and deliver greater collective value within a unified platform.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="h-sub text-aqualogic-ink">Strategic intent</h3>
              <ul className="body-prose mt-3 space-y-2 max-w-prose">
                <li>Identify and engage complementary organisations.</li>
                <li>Acquire three to five complementary SMEs.</li>
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
        </div>
      </section>

      <section id="architecture" className="container-page py-16 scroll-mt-20">
        <p className="eyebrow mb-3 text-sustec-blue">05 &mdash; Brand architecture</p>
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
          <p className="eyebrow mb-3 text-sustec-blue">06 &mdash; Heritage</p>
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
        <p className="eyebrow mb-3 text-sustec-blue">07 &mdash; Visual identity</p>
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
              Full logo system, mark variants and clearspace rules are in the Downloads section.
            </p>
          </div>
          <div className="rounded-2xl bg-grey-cloud/60 h-48 flex items-center justify-center">
            <BrandLogo brand="sustec" variant="lockup" className="max-h-[70%] max-w-[70%]" />
          </div>
        </div>

        <div className="mt-14">
          <h3 className="h-sub text-aqualogic-ink">Primary palette</h3>
          <div className="mt-4">
            <SwatchGrid swatches={meta.palette} columns={4} />
          </div>
          <p className="text-sm text-grey-graphite mt-3">
            See the Aqualogic colour page for the full system with RGB, CMYK, Pantone equivalents
            and WCAG contrast guidance &mdash; the same methodology applies to Sustec.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="h-sub text-aqualogic-ink">Typography</h3>
          <div className="mt-4 rounded-2xl bg-aqualogic-ink text-white p-8 md:p-10">
            <p className="text-7xl md:text-8xl leading-none font-extrabold tracking-tight">Aa</p>
            <p className="mt-4 text-aqualogic-sky text-lg">{meta.typeface.family}</p>
            <p className="text-aqualogic-sky/80 text-xs">{meta.typeface.source}</p>
          </div>
          <p className="body-prose mt-4 max-w-prose">
            Sustec uses Manrope, the same typeface family as Aqualogic, deliberately, so the group
            reads as one system. Colour and logo carry the distinct brand identities.
          </p>
        </div>
      </section>

      <section id="downloads" className="bg-grey-cloud/40">
        <div className="container-page py-16 scroll-mt-20">
          <p className="eyebrow mb-3 text-sustec-blue">08 &mdash; Downloads</p>
          <h2 className="h-section text-aqualogic-ink">Downloads.</h2>
          <p className="lede mt-3 max-w-prose">
            Approved Sustec brand assets for use by the business. Files appear here automatically
            when dropped into the relevant <code className="px-1 py-0.5 bg-grey-cloud rounded text-xs">/public/assets/sustec</code> folder.
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
