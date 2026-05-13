import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Employer brand — Sustec' };

export default function SustecEmployerBrand() {
  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Employer brand"
        title="Employer brand."
        lede="Sustec&rsquo;s employer brand is the group-level promise: a portfolio platform for sustainable water and adjacent businesses, where operating companies stay close to their markets and people can build careers across a wider network."
      />

      <section className="container-page pb-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">Group-level positioning</h2>
          <p className="body-prose mt-4 max-w-prose">
            Sustec is a growth platform, not a holding shell. The story for talent is one of
            scale and stability with the agility of an operating business: established roots,
            real opportunity, and the chance to work across multiple brands as the group adds new
            businesses.
          </p>
          <p className="body-prose mt-4 max-w-prose">
            The day-to-day employer story sits primarily inside each operating business
            (see Aqualogic&rsquo;s employer brand page). Sustec&rsquo;s role is to add credibility
            behind that story and provide a wider career horizon as more businesses join.
          </p>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">How this should be used</h2>
          <p className="body-prose mt-4 max-w-prose">
            Use group-level employer language on the Sustec site and in selected leadership and
            acquisition communications. Use operating-company employer language on Aqualogic
            recruitment, careers content and local hiring activity. Do not blur the two:
            Sustec&rsquo;s job is to sit behind the operating story, not in front of it.
          </p>
        </div>
      </section>
    </BrandFrame>
  );
}
