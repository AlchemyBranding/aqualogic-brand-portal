import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';

export const metadata = { title: 'About Sustec' };

export default function SustecAbout() {
  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / About"
        title="About Sustec."
        lede="Sustec (Sustainable Technologies Limited) is the group brand. It exists to support, connect and future-proof a portfolio of operating businesses across the water and sustainability sectors."
      />

      <section className="container-page pb-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="h-section text-aqualogic-ink">What Sustec is</h2>
          <p className="body-prose mt-4 max-w-prose">
            A holding and platform business behind a growing portfolio of operating companies, the
            first of which is Aqualogic. Sustec was created in 2025 through the management buy-out
            of Aqualogic by Ben Rice and Ashley Williams. It is the vehicle for a deliberate
            &ldquo;buy and build&rdquo; strategy across water services, technical services,
            consultancy, repair and maintenance, wastewater services and adjacent sustainability
            markets.
          </p>
        </div>
        <div>
          <h2 className="h-section text-aqualogic-ink">What Sustec is not</h2>
          <p className="body-prose mt-4 max-w-prose">
            Sustec is not a customer-facing operating brand. It does not deliver services directly.
            Its role is to set the architecture, support shared infrastructure (governance,
            finance, group leadership), enable group-level growth, and create credibility behind
            each operating business without overshadowing it.
          </p>
        </div>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          The original Sustec brand guideline document focuses entirely on visual identity (logo,
          colour, typography, social icons) and contains no brand story or written content.
          The content on this page is layered in from the Aqualogic Brand Strategy doc, which
          establishes the group&rsquo;s role.
        </Callout>
      </section>
    </BrandFrame>
  );
}
