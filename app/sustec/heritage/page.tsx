import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';

export const metadata = { title: 'Heritage — Sustec' };

export default function SustecHeritage() {
  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Heritage"
        title="Heritage."
        lede="Sustec is new, but the businesses it supports are not. The group draws on decades of operational experience inside Aqualogic and brings that experience together under a structure built to scale."
      />

      <section className="container-page pb-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">Where Sustec sits in the journey</h2>
          <p className="body-prose mt-4 max-w-prose">
            Aqualogic&rsquo;s heritage goes back to Flow Control in 1979, with Aqualogic itself
            formed in 2004. After two decades of growth across UK water frameworks, the business
            crossed 250 employees in 2025 and the founding team completed a management buy-out
            through a new holding company, Sustec Ltd (Sustainable Technologies Limited). Sustec
            is the start of a new chapter built deliberately to scale.
          </p>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">How to use the heritage story</h2>
          <p className="body-prose mt-4 max-w-prose">
            Where Sustec needs context, the story is one of evolution &mdash; an established
            operating business reaching the scale and ambition where a group structure made sense.
            The narrative is not corporate reorganisation; it is the recognition that the business
            has changed shape and now has the architecture to keep changing.
          </p>
        </div>
      </section>

      <section className="container-page pb-20 max-w-prose">
        <p className="lede">
          For a full operating heritage timeline (1979 &rarr; 2025), see the Aqualogic heritage
          page. Sustec inherits this story as group context and adds the 2025 group formation as
          the point where the next phase begins.
        </p>
      </section>
    </BrandFrame>
  );
}
