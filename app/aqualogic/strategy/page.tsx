import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { JumpLinks } from '@/components/JumpLinks';

export const metadata = { title: 'Strategy — Aqualogic' };

const jumps = [
  { id: 'executive-summary', label: 'Executive summary' },
  { id: 'business-context', label: 'Business context and growth' },
  { id: 'market-context', label: 'Market context and competitive position' },
  { id: 'strengths-gaps', label: 'Strengths, gaps and opportunities' }
];

export default function AqualogicStrategy() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Strategy' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Strategy"
        title="Strategy."
        lede="The why, where and what of the brand. Use this page to ground new starters, brief partners and align internal teams on how Aqualogic should be described and understood today."
      />

      <div className="container-page grid lg:grid-cols-[1fr_240px] gap-12 pb-20">
        <article className="space-y-16">
          <section id="executive-summary" className="scroll-mt-24">
            <h2 className="h-section text-aqualogic-ink">Executive summary</h2>
            <div className="body-prose mt-5 space-y-5 max-w-prose">
              <p>
                Aqualogic has reached a point where the business is stronger, broader and more
                commercially significant than the way it is currently expressed. It has deep roots
                in water conservation, a long-standing reputation in the sector, growing scale, and
                a service offer that reaches across more of the water journey than many people are
                likely to realise.
              </p>
              <p>
                The opportunity now is not to reinvent the business, but to define it more clearly,
                express it more confidently, and give it a stronger platform for growth. The
                central challenge is clarity. Aqualogic is still too often explained in fragments:
                by individual services, by separate parts of the business, or through the knowledge
                of the people in the room rather than through a clear public narrative.
              </p>
              <p>
                This strategy therefore positions Aqualogic more clearly as an integrated water
                conservation and demand management business, rather than primarily as a collection
                of separate services. The strongest story is not about isolated capabilities. It is
                about solving connected challenges across the water journey through a combination
                of field delivery, consultancy, data, technology, network support and
                customer-side intervention.
              </p>
              <p>
                The strategy also clarifies the relationship between Aqualogic and Sustec.
                Aqualogic remains the lead-facing operating brand. Sustec sits behind it as the
                wider group brand in a visible but measured way, adding credibility and
                future-proofing the wider architecture without distracting from the Aqualogic
                story.
              </p>
            </div>
          </section>

          <section id="business-context" className="scroll-mt-24">
            <h2 className="h-section text-aqualogic-ink">Business context and growth stage</h2>
            <p className="lede mt-3 max-w-prose">
              A growing company. Increasing scale. Broader capability. Stronger market presence.
            </p>
            <div className="body-prose mt-5 space-y-5 max-w-prose">
              <p>
                Aqualogic is operating in a different position now from the one its current public
                story still suggests. It is no longer a small specialist business working quietly
                in the background. It is a growing company with increasing scale, broader
                capability and stronger market presence.
              </p>
              <p>
                Part of the shift is commercial: the business is growing at pace, responding to a
                sector under greater regulatory, operational and environmental pressure, and
                benefiting from stronger demand for the kinds of services it provides. Part of the
                shift is structural: Aqualogic now sits within a wider group context through
                Sustec.
              </p>
              <p>
                The business is also broader than it is currently articulated. Network-side
                activity, customer-side activity, metering, demand reduction, technology, field
                delivery and consultancy all sit within the wider offer, yet they are not always
                expressed as one connected story. As a result, the business can appear more
                fragmented than it really is.
              </p>
              <p>
                There is also an important regional dimension. Aqualogic is national in scope, but
                does not want to feel distant, generic or disconnected from place. The brand needs
                to communicate national capability without losing the sense of local relevance and
                practical connection that gives the business some of its strength.
              </p>
            </div>
          </section>

          <section id="market-context" className="scroll-mt-24">
            <h2 className="h-section text-aqualogic-ink">Market context and competitive position</h2>
            <div className="body-prose mt-5 space-y-5 max-w-prose">
              <p>
                Aqualogic operates in a sector under growing pressure to reduce waste, improve
                resilience and respond more intelligently to regulatory and operational demands.
                The wider market is also becoming noisier, with larger contractors, specialist
                providers and more visibly marketed technology businesses competing for attention.
              </p>
              <p>
                Competitors were described as louder, more visible and more polished in the
                market, particularly on LinkedIn, through awards, conferences and sector presence,
                while Aqualogic was described as stronger operationally but quieter in how it
                presents itself. The challenge is not lack of substance, but
                under-communication of substance.
              </p>
              <p>
                Aqualogic&rsquo;s competitive advantage is its more integrated role across the
                water journey, combining network-side and customer-side activity in a way many
                competitors do not. The position going forward is the more integrated, more agile
                and more evidence-led option in the market.
              </p>
            </div>
          </section>

          <section id="strengths-gaps" className="scroll-mt-24">
            <h2 className="h-section text-aqualogic-ink">Strengths, gaps and opportunities</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-5">
              <div className="card">
                <p className="eyebrow mb-3">Strengths</p>
                <p className="text-sm text-grey-arsenic leading-relaxed">
                  Deep roots in water conservation, strong operational credibility, recognised
                  sector presence, growing scale and a broader offer than many people realise.
                  Trusted for delivery, with more proof, reputation and momentum than is currently
                  being used.
                </p>
              </div>
              <div className="card">
                <p className="eyebrow mb-3">Gaps</p>
                <p className="text-sm text-grey-arsenic leading-relaxed">
                  Not capability, but clarity. Aqualogic is still described differently by
                  different people, which makes the business harder to explain, harder to position,
                  and harder to communicate consistently. The relationship with Sustec is also
                  under-expressed.
                </p>
              </div>
              <div className="card">
                <p className="eyebrow mb-3">Opportunities</p>
                <p className="text-sm text-grey-arsenic leading-relaxed">
                  Turn existing substance into clearer market recognition. Bring strengths
                  together into one clearer story, improve visibility of Aqualogic and Sustec in
                  the right way, and build proof-led communications across LinkedIn, case studies,
                  thought leadership and recruitment content.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Callout title="From the workshop" variant="quote">
                Aqualogic &ldquo;operates in silence&rdquo;. The brand should not need to out-noise
                competitors. The aim is to be clearer about where the business is genuinely strong,
                where that strength is currently under-communicated, and to repeat one central
                story consistently enough that audiences start to recognise it.
              </Callout>
            </div>
          </section>
        </article>
        <aside className="hidden lg:block">
          <JumpLinks items={jumps} />
        </aside>
      </div>
    </BrandFrame>
  );
}
