import { BrandFrame } from '@/components/BrandFrame';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';

export const metadata = { title: 'Imagery — Sustec' };

export default function SustecImagery() {
  return (
    <BrandFrame brand="sustec">
      <PageHeader
        eyebrow="Sustec / Visuals / Imagery"
        title="Imagery."
        lede="Sustec photography should feel deliberate and grown-up. As the group brand sits behind operating businesses, its imagery should signal credibility and scale without competing for attention with the operating brand visuals it endorses."
      />

      <section className="container-page pb-14 grid md:grid-cols-2 gap-8">
        <article>
          <h2 className="h-section text-aqualogic-ink">Direction</h2>
          <ul className="body-prose mt-4 space-y-3 max-w-prose">
            <li>Use imagery that signals platform, scale and sustainability.</li>
            <li>Lean on quieter, more architectural compositions: places, infrastructure, landscape.</li>
            <li>Allow operating brand photography (e.g. Aqualogic) to lead in customer-facing contexts. Sustec imagery should sit behind, not in front.</li>
          </ul>
        </article>
        <article>
          <h2 className="h-section text-aqualogic-ink">Avoid</h2>
          <ul className="body-prose mt-4 space-y-3 max-w-prose">
            <li>Generic corporate stock (handshakes, boardrooms).</li>
            <li>Sci-fi sustainability stock (glowing leaves, abstract eco-graphics).</li>
            <li>Re-using operating brand imagery as Sustec imagery without recontextualising it.</li>
          </ul>
        </article>
      </section>

      <section className="container-page pb-20">
        <Callout title="Flagged" variant="flag">
          The Sustec guideline doc does not include photography direction. The guidance above is
          inferred from the group&rsquo;s architecture role rather than a published rule.
          Recommend a Sustec photography section be built out as the group&rsquo;s public footprint
          grows.
        </Callout>
      </section>
    </BrandFrame>
  );
}
