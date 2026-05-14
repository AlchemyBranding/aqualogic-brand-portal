import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Brand architecture — Aqualogic' };

export default function Architecture() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Brand architecture' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Brand architecture"
        title="Brand architecture."
        lede="How Aqualogic and Sustec relate, and how that relationship is expressed in client-facing and group-facing communications."
      />

      <section className="container-page pb-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">In the market</h2>
          <p className="body-prose mt-4 max-w-prose">
            Aqualogic is the operating business, the recognised name in the market, and the story
            clients, recruits and partners need to understand first. The relationship with Sustec
            needs to be visible enough to create legitimacy and support future group growth, but
            not so dominant that it weakens the Aqualogic story.
          </p>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">Endorsement wording</h2>
          <p className="body-prose mt-4 max-w-prose">
            Use a light endorsement model. Where Sustec needs to be referenced on the Aqualogic
            website or collateral, the recommended wording is:
          </p>
          <p className="mt-4 rounded-xl bg-grey-cloud/60 px-5 py-4 font-mono text-aqualogic-ink">
            Aqualogic, a Sustec company
          </p>
          <p className="mt-3 text-sm text-grey-graphite">
            Suggested placements: footer, About / company overview content.
          </p>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="rounded-3xl border border-aqualogic-cyan/30 bg-aqualogic-sky/10 p-8 md:p-12 max-w-4xl">
          <p className="eyebrow text-aqualogic-ink mb-3">Brand architecture (recommended wording)</p>
          <p className="text-lg md:text-2xl text-aqualogic-ink leading-snug font-medium">
            Aqualogic is the lead-facing operating brand. Sustec is the parent and group brand
            behind it. Aqualogic should always lead in client-facing communications, with Sustec
            used as a supporting endorsement where relevant.
          </p>
        </div>
      </section>

      <section className="container-page pb-20">
        <h2 className="h-section text-aqualogic-ink">Strategic role</h2>
        <p className="body-prose mt-4 max-w-prose">
          The purpose of this structure is clarity. It allows Aqualogic to keep building
          recognition in its own right, while giving Sustec enough visibility to support
          credibility, group narrative and future acquisitions. Used well, it avoids both extremes:
          hiding the group altogether, or pushing the group brand into the foreground before it is
          ready.
        </p>
      </section>
    </BrandFrame>
  );
}
