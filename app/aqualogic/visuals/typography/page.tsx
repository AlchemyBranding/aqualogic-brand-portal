import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
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

type Step = {
  name: string;
  example: string;
  sizeRem: string;
  sizePx: string;
  weight: string;
  weightClass: string;
  lineHeight: string;
  tracking: string;
  use: string;
};

const scale: Step[] = [
  {
    name: 'Display',
    example: 'Intelligent water conservation.',
    sizeRem: 'clamp(2.5rem, 5vw, 4.5rem)',
    sizePx: '40–72 px',
    weight: 'ExtraBold 800',
    weightClass: 'font-extrabold',
    lineHeight: '1.02',
    tracking: '-0.02em',
    use: 'Hero. One per page. Sets the tone of the brand at first contact.'
  },
  {
    name: 'H1',
    example: 'Strategy.',
    sizeRem: '3rem',
    sizePx: '48 px',
    weight: 'ExtraBold 800',
    weightClass: 'font-extrabold',
    lineHeight: '1.05',
    tracking: '-0.02em',
    use: 'Primary page title. One per page below the breadcrumb.'
  },
  {
    name: 'H2',
    example: 'How we sound and behave.',
    sizeRem: '2rem',
    sizePx: '32 px',
    weight: 'Bold 700',
    weightClass: 'font-bold',
    lineHeight: '1.1',
    tracking: '-0.015em',
    use: 'Section heading inside a page.'
  },
  {
    name: 'H3',
    example: 'Tone of voice.',
    sizeRem: '1.5rem',
    sizePx: '24 px',
    weight: 'Semibold 600',
    weightClass: 'font-semibold',
    lineHeight: '1.2',
    tracking: '-0.01em',
    use: 'Card titles, sub-section heads.'
  },
  {
    name: 'H4',
    example: 'Working statement.',
    sizeRem: '1.25rem',
    sizePx: '20 px',
    weight: 'Semibold 600',
    weightClass: 'font-semibold',
    lineHeight: '1.25',
    tracking: '-0.005em',
    use: 'Inline sub-heads, callouts.'
  },
  {
    name: 'Lede',
    example: 'A short introduction that sits beneath a page title.',
    sizeRem: '1.25rem',
    sizePx: '20 px',
    weight: 'Regular 400',
    weightClass: 'font-normal',
    lineHeight: '1.55',
    tracking: 'normal',
    use: 'Intro paragraph. One short paragraph at most.'
  },
  {
    name: 'Body',
    example:
      'We help water companies save water and strengthen resilience through integrated demand management.',
    sizeRem: '1rem',
    sizePx: '16 px',
    weight: 'Regular 400 / Medium 500',
    weightClass: 'font-normal',
    lineHeight: '1.65',
    tracking: 'normal',
    use: 'Reading copy. Default for paragraphs.'
  },
  {
    name: 'Small / Caption',
    example: 'Source: Aqualogic Brand Strategy, 2025.',
    sizeRem: '0.875rem',
    sizePx: '14 px',
    weight: 'Regular 400',
    weightClass: 'font-normal',
    lineHeight: '1.5',
    tracking: '0.005em',
    use: 'Captions, image credits, fine print.'
  },
  {
    name: 'Eyebrow',
    example: 'AQUALOGIC / POSITIONING',
    sizeRem: '0.75rem',
    sizePx: '12 px',
    weight: 'Semibold 600',
    weightClass: 'font-semibold',
    lineHeight: '1.2',
    tracking: '0.16em',
    use: 'Uppercase. Sits above a heading to label the section or page.'
  }
];

const spacingScale = [
  { token: '0.5', px: '4 px', use: 'Hairlines, tightest gaps.' },
  { token: '1', px: '8 px', use: 'Icon to label spacing.' },
  { token: '1.5', px: '12 px', use: 'Inline gaps.' },
  { token: '2', px: '16 px', use: 'Default small gap.' },
  { token: '3', px: '24 px', use: 'Between paragraphs, between fields.' },
  { token: '4', px: '32 px', use: 'Between sections of a card.' },
  { token: '6', px: '48 px', use: 'Between cards or compact sections.' },
  { token: '8', px: '64 px', use: 'Between major sections on a page.' },
  { token: '12', px: '96 px', use: 'Top of a section, breathing room.' }
];

export default function AqualogicTypography() {
  const meta = brandMeta.aqualogic;
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Visuals' },
          { label: 'Typography' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Visuals / Typography"
        title="Typography."
        lede={`The Aqualogic typeface is ${meta.typeface.family}. It is a clean, modern sans-serif with strong legibility from large headlines to small body. Use it for logos, headlines, body and supporting text across digital and print.`}
      />

      <section className="container-page pb-12">
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

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Type scale</h2>
        <p className="body-prose mt-4 max-w-prose">
          A hierarchy that scales fluidly across viewports. Sizes are expressed in rem (relative to
          the base 16 px); pixel values are shown for reference.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-3 bg-grey-cloud/40 border border-grey-smoke text-aqualogic-ink font-semibold">Step</th>
                <th className="p-3 bg-grey-cloud/40 border border-grey-smoke text-aqualogic-ink font-semibold">Example</th>
                <th className="p-3 bg-grey-cloud/40 border border-grey-smoke text-aqualogic-ink font-semibold">Size</th>
                <th className="p-3 bg-grey-cloud/40 border border-grey-smoke text-aqualogic-ink font-semibold">Weight</th>
                <th className="p-3 bg-grey-cloud/40 border border-grey-smoke text-aqualogic-ink font-semibold">Leading</th>
                <th className="p-3 bg-grey-cloud/40 border border-grey-smoke text-aqualogic-ink font-semibold">Tracking</th>
                <th className="p-3 bg-grey-cloud/40 border border-grey-smoke text-aqualogic-ink font-semibold">Use</th>
              </tr>
            </thead>
            <tbody>
              {scale.map((s) => (
                <tr key={s.name} className="align-top">
                  <td className="p-3 border border-grey-smoke font-semibold text-aqualogic-ink whitespace-nowrap">{s.name}</td>
                  <td className={`p-3 border border-grey-smoke text-aqualogic-ink ${s.weightClass}`} style={{ fontSize: 'clamp(0.95rem, 1vw, 1.05rem)' }}>{s.example}</td>
                  <td className="p-3 border border-grey-smoke font-mono whitespace-nowrap">
                    <span className="block text-aqualogic-ink">{s.sizePx}</span>
                    <span className="block text-grey-space text-xs">{s.sizeRem}</span>
                  </td>
                  <td className="p-3 border border-grey-smoke font-mono whitespace-nowrap">{s.weight}</td>
                  <td className="p-3 border border-grey-smoke font-mono whitespace-nowrap">{s.lineHeight}</td>
                  <td className="p-3 border border-grey-smoke font-mono whitespace-nowrap">{s.tracking}</td>
                  <td className="p-3 border border-grey-smoke text-grey-graphite">{s.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-page pb-14 grid md:grid-cols-2 gap-6">
        <article className="card">
          <p className="eyebrow mb-3">Fallback stack</p>
          <p className="body-prose text-sm leading-relaxed">
            Use this CSS stack so the brand still feels right when Manrope can&rsquo;t load:
          </p>
          <pre className="mt-3 rounded-xl bg-grey-cloud/60 p-4 text-xs font-mono text-aqualogic-ink whitespace-pre-wrap break-all">
font-family: &apos;Manrope&apos;, system-ui, -apple-system,
  &apos;Segoe UI&apos;, Roboto, &apos;Helvetica Neue&apos;,
  Arial, sans-serif;
          </pre>
          <p className="text-xs text-grey-graphite mt-3">
            Already wired in the portal&rsquo;s Tailwind config under the <code className="px-1 py-0.5 bg-grey-cloud rounded">font-sans</code> token.
          </p>
        </article>
        <article className="card">
          <p className="eyebrow mb-3">Secondary editorial typeface</p>
          <p className="body-prose text-sm leading-relaxed">
            For long-form editorial and reports where a serif sits more comfortably with extended
            reading, use <strong>Source Serif 4</strong> (Adobe / Google Fonts, open source). Pair
            at a slightly smaller size than the equivalent Manrope step so the two voices balance.
          </p>
          <p className="font-serif text-2xl text-aqualogic-ink mt-4 leading-snug" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
            Practical intervention, intelligent use of expertise.
          </p>
          <p className="text-xs text-grey-graphite mt-3">
            Use sparingly. Aqualogic&rsquo;s default voice is Manrope.
          </p>
        </article>
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Spacing scale</h2>
        <p className="body-prose mt-4 max-w-prose">
          An 8 px base unit. Predictable, easy to math at any zoom level, and aligned with both
          Tailwind&rsquo;s default spacing scale and most print grids.
        </p>
        <ul role="list" className="mt-6 grid gap-2 max-w-3xl">
          {spacingScale.map((s) => {
            const px = parseInt(s.px, 10);
            return (
              <li key={s.token} className="flex items-center gap-4 text-sm">
                <span className="font-mono text-aqualogic-cyan font-bold w-12">{s.token}</span>
                <span className="font-mono text-grey-graphite w-16">{s.px}</span>
                <span aria-hidden className="bg-aqualogic-cyan h-3 rounded" style={{ width: px }} />
                <span className="text-grey-graphite">{s.use}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="container-page pb-20">
        <Callout title="Implementation notes" variant="note">
          <ul className="space-y-2 mt-1">
            <li>
              The Display step uses CSS <code className="px-1 py-0.5 bg-grey-cloud rounded text-xs">clamp()</code>{' '}
              so it scales fluidly between mobile and desktop.
            </li>
            <li>
              Negative tracking on display and H1&ndash;H4 tightens the look at large sizes. Body
              and small steps use normal tracking; eyebrow uses generous tracking for the
              uppercase treatment.
            </li>
            <li>
              Avoid styling body copy under 14 px. If you need text smaller than that, use the
              eyebrow style or rethink the hierarchy.
            </li>
          </ul>
        </Callout>
      </section>
    </BrandFrame>
  );
}
