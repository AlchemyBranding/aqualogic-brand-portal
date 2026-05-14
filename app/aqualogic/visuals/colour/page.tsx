import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { FullSwatchGrid } from '@/components/FullSwatch';
import { ContrastMatrix } from '@/components/ContrastMatrix';
import { aqualogicColours, grayscaleColours } from '@/lib/colour-systems';

export const metadata = { title: 'Colour — Aqualogic' };

export default function AqualogicColour() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs
        items={[
          { label: 'Portal', href: '/' },
          { label: 'Aqualogic', href: '/aqualogic' },
          { label: 'Visuals' },
          { label: 'Colour' }
        ]}
      />
      <PageHeader
        eyebrow="Aqualogic / Visuals / Colour"
        title="Colour."
        lede="The Aqualogic palette anchors the brand visually. Aqua Cyan brings the freshness and clarity of the strapline, Ink provides depth and authority, Sky is a softer support tone, and Paper is the neutral surface most copy sits on."
      />

      <section className="container-page pb-12 max-w-prose">
        <h2 className="h-section text-aqualogic-ink">How to use the palette</h2>
        <ul className="body-prose mt-4 space-y-3">
          <li><strong>Ink (#0C2C3A)</strong> &mdash; primary text colour. Use for body, headings and on Paper backgrounds.</li>
          <li><strong>Aqua Cyan (#00B6DB)</strong> &mdash; accent colour for links, calls to action, the strapline, infographics and selective highlights.</li>
          <li><strong>Sky (#6AC2D8)</strong> &mdash; soft support tone for tinted surfaces, illustrations, secondary callouts. Avoid as a primary text colour: contrast on Paper is too low.</li>
          <li><strong>Paper (#FAFBFF)</strong> &mdash; default background. Sits gently off pure white.</li>
        </ul>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-6">Primary palette</p>
        <FullSwatchGrid swatches={aqualogicColours} columns={4} />
        <p className="text-xs text-grey-graphite mt-4">
          Pantone references are closest Coated (C) matches. Confirm against a calibrated fan deck before going to print.
        </p>
      </section>

      <section className="container-page pb-14">
        <p className="eyebrow mb-6">Grayscale</p>
        <FullSwatchGrid swatches={grayscaleColours} columns={4} />
      </section>

      <section className="container-page pb-14">
        <h2 className="h-section text-aqualogic-ink">Accessibility</h2>
        <p className="body-prose mt-4 max-w-prose">
          Every text-and-background pairing used in production should pass <strong>WCAG 2.1 AA</strong>:
          a contrast ratio of <strong>4.5:1 for normal text</strong> and <strong>3:1 for large text or UI
          components</strong>. The matrix below shows the ratio for each brand colour against each
          background. Aim for AA on small body copy and AAA where possible on critical reading.
        </p>
        <div className="mt-6">
          <ContrastMatrix
            foregrounds={aqualogicColours}
            backgrounds={[
              ...aqualogicColours.filter((c) => c.name !== 'Sky'),
              grayscaleColours.find((c) => c.name === 'Phantom')!,
              grayscaleColours.find((c) => c.name === 'Black')!
            ]}
          />
        </div>
        <p className="text-xs text-grey-graphite mt-4">
          Quick guide: cells marked <strong>Pass AAA</strong> are safe everywhere; <strong>Pass AA</strong>
          is the production minimum; <strong>Pass AA large only</strong> means use at headline sizes
          or above (24 px / 18.66 px bold); <strong>Fail</strong> means do not use that combination
          for text.
        </p>
      </section>

      <section className="container-page pb-20 max-w-prose">
        <h2 className="h-section text-aqualogic-ink">Print and digital</h2>
        <p className="body-prose mt-4">
          For <strong>digital</strong> work, use HEX. For <strong>print</strong>, use CMYK (uncoated
          stocks tend toward duller, more saturated equivalents; check the proof). For brand-critical
          print runs, request Pantone matches against a fan deck rather than calculated equivalents.
          RGB values are provided for software that needs them.
        </p>
      </section>
    </BrandFrame>
  );
}
