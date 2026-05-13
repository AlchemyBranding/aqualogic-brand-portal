import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';

export const metadata = { title: 'Group strategy — Sustec' };

const buyAndBuild = [
  {
    label: 'Acquisition 1',
    body: 'Water consultancy company with significant brand reputation in the sector. Aligned with group; targeted for Jan-27 inclusion.'
  },
  {
    label: 'Acquisition 2',
    body: 'Leakage technical services organisation with strong brand reputation. Strengthens recent growth in leak detection and opens new client and geographical relationships. Targeted for Jan-27 inclusion.'
  },
  {
    label: 'Acquisition 3',
    body: 'Water repair and maintenance contractor. Sustec already holds a 20% equity stake. Envisaged completion Sept-27.'
  },
  {
    label: 'Acquisitions 4 & 5',
    body: 'A wastewater services provider (further diversification) and a similar-size competitor (market strengthening). Targets not yet identified.'
  }
];

export default function GroupStrategy() {
  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Group strategy"
        title="Group strategy."
        lede="Sustec is the platform behind a deliberate buy-and-build strategy, targeting a group annual turnover of more than £50m through three to five complementary SMEs in water and adjacent sectors."
      />

      <section className="container-page pb-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">Strategic intent</h2>
          <ul className="body-prose mt-4 space-y-3 max-w-prose">
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
          <h2 className="h-section text-aqualogic-ink">Market context (AMP8)</h2>
          <p className="body-prose mt-4 max-w-prose">
            The UK water sector entered an unprecedented era of investment with PR24 (2025&ndash;2030),
            with around &pound;104bn approved &mdash; nearly double the previous AMP period. Focus
            areas include drought resilience, sewage spill reduction, smart metering expansion,
            leakage detection and pressure management. This scale of investment creates strong
            demand for services across the Aqualogic offer and creates space for complementary
            acquisitions across water services, wastewater, repair and maintenance, and adjacent
            renewables markets.
          </p>
        </div>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-6">Buy &amp; build pipeline</p>
        <ul role="list" className="grid gap-5 md:grid-cols-2">
          {buyAndBuild.map((a) => (
            <li key={a.label} className="card">
              <p className="font-mono text-aqualogic-cyan font-bold">{a.label}</p>
              <p className="text-sm text-grey-arsenic mt-3 leading-relaxed">{a.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-20">
        <Callout title="Internal only" variant="note">
          Pipeline detail is drawn from the Aqualogic Information Memorandum and is commercially
          sensitive. This page is gated by the portal password and should not be republished
          externally without sign-off.
        </Callout>
      </section>
    </BrandFrame>
  );
}
