import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Tone of voice — Aqualogic' };

const traits = [
  {
    word: 'Clear',
    desc: 'in how it explains the business, its value and its services.'
  },
  {
    word: 'Confident',
    desc: 'in how it presents capability, outcomes and expertise.'
  },
  {
    word: 'Practical',
    desc: 'in how it talks about problems, delivery and real-world impact.'
  },
  {
    word: 'Human',
    desc: 'in how it reflects people, relationships, communities and culture.'
  }
];

const dos = [
  'Sound knowledgeable without sounding dense.',
  'Explain things in plain English. Avoid hiding behind technical language unless the context genuinely requires it.',
  'Sound commercially aware, but not salesy.',
  'Sound modern, but not trend-led.',
  'Be credible enough for procurement, operational and leadership audiences, while still accessible to recruits and communities.',
  'Stay grounded in evidence. When the voice speaks with confidence, that confidence should come from delivery, insight and evidence.'
];

const donts = [
  'Avoid vague, over-polished or overly generic language.',
  'Avoid broad phrases that could belong to almost any business.',
  'Avoid unnecessary jargon, inflated environmental language or innovation claims that are not grounded in something real.',
  'Avoid sounding fragmented. Different areas of the business will naturally speak to different audiences, but the underlying voice should still feel recognisably Aqualogic.',
  'Do not overclaim, oversell or sound more dramatic than the proof allows.'
];

export default function Voice() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Tone of voice' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Tone of voice"
        title="Tone of voice."
        lede="If positioning explains what the business is, tone of voice shapes how that message is delivered. It is one of the main reasons a company can say something accurate and still fail to land it properly."
      />

      <section className="container-page pb-12">
        <h2 className="h-section text-aqualogic-ink">How to use it</h2>
        <p className="body-prose mt-4 max-w-prose">
          The homepage should sound clear and confident. The About story should sound grounded and
          credible. Service pages should feel practical and easy to follow rather than overloaded
          with jargon. Case studies should sound outcome-led and evidence-based. Recruitment pages
          should sound human and honest rather than generic.
        </p>
        <p className="body-prose mt-4 max-w-prose">
          Different channels do not all need to sound identical, but they should all feel like
          they come from the same brand. Tone of voice is not the same as messaging: messaging is
          what Aqualogic needs to say, tone of voice is how it should say it.
        </p>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-3">Aqualogic should sound</p>
        <ul role="list" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {traits.map((t) => (
            <li key={t.word} className="rounded-3xl bg-aqualogic-ink text-white p-8">
              <p className="text-5xl lg:text-4xl font-extrabold tracking-tight text-aqualogic-cyan">{t.word}.</p>
              <p className="mt-4 text-sm text-aqualogic-sky/90 leading-relaxed">{t.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-14 grid md:grid-cols-2 gap-8">
        <div className="card">
          <p className="eyebrow text-emerald-700 mb-3">Do</p>
          <ul className="space-y-3 text-grey-arsenic text-sm leading-relaxed">
            {dos.map((d) => (
              <li key={d} className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-emerald-600 before:font-bold">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <p className="eyebrow text-rose-700 mb-3">Avoid</p>
          <ul className="space-y-3 text-grey-arsenic text-sm leading-relaxed">
            {donts.map((d) => (
              <li key={d} className="pl-6 relative before:content-['✕'] before:absolute before:left-0 before:text-rose-600 before:font-bold">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </BrandFrame>
  );
}
