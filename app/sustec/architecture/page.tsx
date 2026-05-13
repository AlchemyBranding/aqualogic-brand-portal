import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Brand architecture — Sustec' };

export default function SustecArchitecture() {
  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Brand architecture"
        title="Brand architecture."
        lede="The rule that governs how Sustec relates to the businesses it owns, and how those businesses present themselves in the market."
      />

      <section className="container-page pb-12">
        <div className="rounded-3xl bg-aqualogic-ink text-white p-8 md:p-12 max-w-4xl">
          <p className="eyebrow text-aqualogic-sky mb-4">Brand architecture</p>
          <p className="text-xl md:text-2xl font-semibold leading-snug">
            Sustec is the group brand. Its role is to support, connect and future-proof a
            portfolio of operating businesses, while allowing those businesses to retain their own
            market identity and specialist positioning.
          </p>
        </div>
      </section>

      <section className="container-page pb-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">How it works in practice</h2>
          <p className="body-prose mt-4 max-w-prose">
            Operating brands lead with their own stories. They keep their market identity, voice
            and customer-facing language. Sustec provides the group endorsement, the portfolio
            context and the platform behind them. The Aqualogic website should point up to Sustec
            as its parent; the Sustec website should point down to operating companies. That
            two-way connection is what makes the architecture readable.
          </p>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">Why it scales</h2>
          <p className="body-prose mt-4 max-w-prose">
            This rule gives Sustec a clear role in the system and creates a structure that scales
            as acquisitions are added. It also helps prevent future confusion by establishing
            early that operating brands lead with their own stories, while Sustec provides the
            group endorsement and portfolio context behind them.
          </p>
        </div>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-6">Endorsement wording</p>
        <div className="grid md:grid-cols-2 gap-5">
          <article className="card">
            <h3 className="h-sub text-aqualogic-ink">On the Aqualogic site</h3>
            <p className="text-sm text-grey-graphite mt-3">
              Light endorsement in footer and About content.
            </p>
            <p className="mt-4 rounded-xl bg-grey-cloud/60 px-4 py-3 font-mono text-aqualogic-ink text-sm">
              Aqualogic, a Sustec company
            </p>
          </article>
          <article className="card">
            <h3 className="h-sub text-aqualogic-ink">On the Sustec site</h3>
            <p className="text-sm text-grey-graphite mt-3">
              In the portfolio / operating companies section, with a direct link through to the
              Aqualogic site.
            </p>
            <p className="mt-4 rounded-xl bg-grey-cloud/60 px-4 py-3 font-mono text-aqualogic-ink text-sm">
              Aqualogic is a Sustec company specialising in integrated water conservation and demand management.
            </p>
          </article>
        </div>
      </section>
    </BrandFrame>
  );
}
