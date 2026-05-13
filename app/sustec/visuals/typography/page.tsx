import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { brandMeta } from '@/lib/brand-tokens';

export const metadata = { title: 'Typography — Sustec' };

const weights = [
  { label: 'ExtraLight', value: '200', className: 'font-extralight' },
  { label: 'Light', value: '300', className: 'font-light' },
  { label: 'Regular', value: '400', className: 'font-normal' },
  { label: 'Medium', value: '500', className: 'font-medium' },
  { label: 'Semibold', value: '600', className: 'font-semibold' },
  { label: 'Bold', value: '700', className: 'font-bold' },
  { label: 'ExtraBold', value: '800', className: 'font-extrabold' }
];

export default function SustecTypography() {
  const meta = brandMeta.sustec;
  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Visuals / Typography"
        title="Typography."
        lede={`Sustec uses ${meta.typeface.family}, the same typeface family as Aqualogic. The shared typeface is intentional: it gives the group a consistent textural feel while letting colour and logo carry the distinct brand identities.`}
      />

      <section className="container-page pb-14">
        <div className="rounded-3xl bg-aqualogic-ink text-white p-10 md:p-16">
          <p className="text-9xl md:text-[12rem] leading-none font-extrabold tracking-tight">Aa</p>
          <p className="mt-6 text-aqualogic-sky text-xl">{meta.typeface.family}</p>
          <p className="mt-1 text-aqualogic-sky/80 text-sm">{meta.typeface.source}</p>
        </div>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-6">Weights</p>
        <ul role="list" className="rounded-2xl border border-grey-smoke divide-y divide-grey-smoke overflow-hidden">
          {weights.map((w) => (
            <li key={w.value} className="flex items-baseline justify-between px-6 py-5 bg-white">
              <span className={`${w.className} text-3xl tracking-tight text-aqualogic-ink`}>
                Sustec Group
              </span>
              <span className="text-grey-graphite font-mono text-sm shrink-0 ml-6">{w.label} {w.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          As with Aqualogic, the Sustec guideline doc names Manrope but does not specify a
          hierarchy (heading scale, line-height, spacing) or a secondary typeface for editorial
          contexts. Recommendations to follow.
        </Callout>
      </section>
    </BrandFrame>
  );
}
