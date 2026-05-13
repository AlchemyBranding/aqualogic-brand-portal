import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { brandMeta } from '@/lib/brand-tokens';

export const metadata = { title: 'Typography — Aqualogic' };

const weights = [
  { label: 'ExtraLight', value: '200', className: 'font-extralight' },
  { label: 'Light', value: '300', className: 'font-light' },
  { label: 'Regular', value: '400', className: 'font-normal' },
  { label: 'Medium', value: '500', className: 'font-medium' },
  { label: 'Semibold', value: '600', className: 'font-semibold' },
  { label: 'Bold', value: '700', className: 'font-bold' },
  { label: 'ExtraBold', value: '800', className: 'font-extrabold' }
];

export default function AqualogicTypography() {
  const meta = brandMeta.aqualogic;
  return (
    <BrandFrame brand="aqualogic">
      <PageHeader
        eyebrow="Aqualogic / Visuals / Typography"
        title="Typography."
        lede={`The Aqualogic typeface is ${meta.typeface.family}. It is a clean, modern sans-serif with strong legibility from large headlines to small body. Use it for logos, headlines, body and supporting text across digital and print.`}
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
                Intelligent water conservation
              </span>
              <span className="text-grey-graphite font-mono text-sm shrink-0 ml-6">{w.label} {w.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-14 grid md:grid-cols-2 gap-8">
        <article className="card">
          <p className="eyebrow mb-3">Headlines</p>
          <p className="text-4xl font-extrabold text-aqualogic-ink leading-tight">
            From source to tap.
          </p>
          <p className="text-sm text-grey-graphite mt-4">
            ExtraBold or Bold, tight leading, tight tracking. Use sparingly for impact.
          </p>
        </article>
        <article className="card">
          <p className="eyebrow mb-3">Body</p>
          <p className="text-base text-aqualogic-ink leading-relaxed">
            We help water companies save water and strengthen resilience through integrated demand
            management. Combining network expertise, customer-side delivery, data, technology and
            practical field capability.
          </p>
          <p className="text-sm text-grey-graphite mt-4">
            Regular or Medium, comfortable leading, sentence case.
          </p>
        </article>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          The brand guideline doc names Manrope but does not specify a hierarchy (H1&ndash;H6
          scale, line-height, letter spacing, paragraph spacing), nor a secondary typeface for
          long-form / editorial use, nor fallback stacks. Recommended additions in the
          Recommendations section.
        </Callout>
      </section>
    </BrandFrame>
  );
}
