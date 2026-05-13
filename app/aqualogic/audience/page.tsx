import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Audience and personas — Aqualogic' };

const personas = [
  {
    name: 'Client and delivery',
    role: 'Most commercially important audience.',
    who: 'Water companies, procurement and framework stakeholders, operational leaders, technical decision-makers, delivery partners.',
    needs:
      'Capability, reliability, responsiveness, regulatory relevance, measurable outcomes, confidence in delivery.',
    content:
      'Case studies, contract win announcements, project mobilisation stories, operational outcomes, dashboards, client endorsements, technical thought leadership, sector commentary, clear service / case study pages.',
    channels: 'Website, LinkedIn, tender support material, company overview decks.'
  },
  {
    name: 'People and recruitment',
    role: 'Hiring, retention and internal alignment.',
    who: 'Current employees, future recruits, regional talent pools. Field-based roles, operational hires, technical specialists, future managers.',
    needs:
      'Confidence that Aqualogic is a serious place to build a career. Established, growing, credible and still evolving. Practical opportunity, progression, trust, team connection, meaningful work.',
    content:
      'Careers copy, "day in the life" content, local recruitment campaigns, leadership visibility, employee stories, service milestones, training and progression content, induction materials, internal updates, employer-brand content.',
    channels: 'Careers pages, local recruitment, internal channels. Tone: grounded and believable, not glossy.'
  },
  {
    name: 'Reputation and growth',
    role: 'Broader, less immediate, but strategically important.',
    who: 'Future partners, acquisition conversations, sector bodies, industry media, potential referrers.',
    needs:
      'Confidence in the overall shape of the business. Established, capable, credible and moving forward. Clear understanding of how Aqualogic relates to Sustec as the group grows.',
    content:
      'Leadership commentary, sector opinion pieces, conference visibility, sustainability and impact stories, selected milestone content, partnership announcements, media coverage, portfolio context on the Sustec site.',
    channels: 'LinkedIn (selected), sector publications, Sustec site, conference visibility.'
  }
];

export default function Audience() {
  return (
    <BrandFrame brand="aqualogic">
      <PageHeader
        eyebrow="Aqualogic / Audience"
        title="Audience and personas."
        lede="Aqualogic cannot speak to every audience in the same way and expect the brand to land well. The audience framework keeps the brand focused so the website becomes clearer, marketing becomes more relevant, and the business stops trying to say everything to everyone at once."
      />

      <section className="container-page pb-20 space-y-6">
        {personas.map((p, i) => (
          <article
            key={p.name}
            className="rounded-3xl border border-grey-smoke bg-white p-8 md:p-10"
          >
            <div className="flex items-start gap-6">
              <span className="font-mono text-aqualogic-cyan text-3xl font-bold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h2 className="h-section text-aqualogic-ink">{p.name}</h2>
                <p className="text-grey-graphite mt-1">{p.role}</p>
                <dl className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-5 text-sm">
                  <div>
                    <dt className="eyebrow mb-1">Who</dt>
                    <dd className="text-grey-arsenic leading-relaxed">{p.who}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1">What matters to them</dt>
                    <dd className="text-grey-arsenic leading-relaxed">{p.needs}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1">Content that lands</dt>
                    <dd className="text-grey-arsenic leading-relaxed">{p.content}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1">Channels</dt>
                    <dd className="text-grey-arsenic leading-relaxed">{p.channels}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page pb-20 max-w-prose">
        <h2 className="h-section text-aqualogic-ink">How these personas should be used</h2>
        <p className="body-prose mt-4">
          These personas should be used to make content and messaging more relevant, not more
          complicated. They do not need to become fictional characters with invented details.
          Their purpose is practical: who the website needs to speak to first, what proof matters
          most to each audience, what language is most likely to land, which stories belong in
          which channels, and where recruitment, reputation and commercial messaging need to
          diverge.
        </p>
        <p className="body-prose mt-4">
          The website should prioritise the client and delivery audience first, while still
          supporting recruitment and wider reputation. Marketing should then use the same audience
          structure to plan content more deliberately, so different channels and stories are doing
          different jobs.
        </p>
      </section>
    </BrandFrame>
  );
}
