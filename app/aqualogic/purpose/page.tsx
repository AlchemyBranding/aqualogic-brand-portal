import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Purpose, Vision, Mission — Aqualogic' };

export default function PurposeVisionMission() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Purpose, Vision, Mission' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Purpose, Vision, Mission"
        title="Purpose, Vision, Mission."
        lede="Three statements doing different jobs. Purpose explains why Aqualogic exists. Vision sets the future the business is working towards. Mission explains what the business does, who it does it for and how."
      />

      <section className="container-page pb-12">
        <h2 className="h-section text-aqualogic-ink">How to use these statements</h2>
        <p className="body-prose mt-4 max-w-prose">
          They will only be useful if they are adopted internally. They need to become part of how
          Aqualogic introduces itself, briefs its teams and trains its leaders to speak
          consistently. Use them in induction, leadership materials, company overview decks,
          internal communications and future updates to the brand guidelines.
        </p>
        <p className="body-prose mt-4 max-w-prose">
          On the website, the purpose and vision should sit more naturally within the About story
          and wider company narrative, while the mission should shape the clearer explanation of
          what Aqualogic does and how it creates value.
        </p>
      </section>

      <section className="container-page pb-12">
        <StatementCard
          eyebrow="Purpose"
          statement="To help protect water as a vital resource by reducing waste, improving efficiency and delivering practical solutions that create lasting value for customers, communities and the environment."
          why="Rooted in the strongest themes already present in the business. It connects heritage and current capability without sounding backward-looking. It is broad enough to hold the full shape of Aqualogic's offer, but clear enough to mean something. It gives the company a reason for existing that is bigger than contracts or service lines alone."
        />
      </section>

      <section className="container-page pb-12">
        <StatementCard
          eyebrow="Vision"
          statement="A future where water is used more intelligently, wasted less often and managed with greater care, resilience and responsibility."
          why="Simple, future-facing and closely tied to the company's role. Gives the business a clear destination without sounding overblown, and links naturally to both the positioning and the wider sustainability story."
          tone="aqua"
        />
      </section>

      <section className="container-page pb-20">
        <StatementCard
          eyebrow="Mission"
          statement="To help water companies reduce waste, improve performance and strengthen resilience through integrated demand management, combining practical field delivery, technical expertise, data and customer-side support."
          why="Specific enough to be useful, but broad enough to hold the current business and near-term growth. Reflects the positioning direction, ties together the network and customer-side story, and avoids the vagueness that makes mission statements unusable."
          tone="ink"
        />
      </section>
    </BrandFrame>
  );
}

function StatementCard({
  eyebrow,
  statement,
  why,
  tone = 'paper'
}: {
  eyebrow: string;
  statement: string;
  why: string;
  tone?: 'paper' | 'aqua' | 'ink';
}) {
  const styles =
    tone === 'ink'
      ? 'bg-aqualogic-ink text-white'
      : tone === 'aqua'
        ? 'bg-aqualogic-sky/15 text-aqualogic-ink'
        : 'bg-grey-cloud/40 text-aqualogic-ink';
  const eyebrowClass = tone === 'ink' ? 'text-aqualogic-sky' : 'text-grey-graphite';
  const whyClass = tone === 'ink' ? 'text-aqualogic-sky/90' : 'text-grey-arsenic';

  return (
    <article className={`rounded-3xl p-8 md:p-12 ${styles}`}>
      <p className={`eyebrow mb-4 ${eyebrowClass}`}>{eyebrow}</p>
      <p className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight max-w-4xl">
        {statement}
      </p>
      <div className="mt-8 max-w-prose">
        <p className={`text-xs uppercase tracking-widest font-semibold ${eyebrowClass}`}>Why this works</p>
        <p className={`mt-2 text-sm leading-relaxed ${whyClass}`}>{why}</p>
      </div>
    </article>
  );
}
