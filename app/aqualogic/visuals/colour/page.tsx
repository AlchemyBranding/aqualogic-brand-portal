import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { FullSwatchGrid } from '@/components/FullSwatch';
import { ContrastMatrix } from '@/components/ContrastMatrix';
import { aqualogicColours, aqualogicExtendedColours, grayscaleColours } from '@/lib/colour-systems';

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

      <section className="container-page pb-12">
        <h2 className="h-section text-aqualogic-ink">How to use the palette</h2>
        <ul className="body-prose mt-4 space-y-3 max-w-prose">
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
        <p className="eyebrow mb-6">Extended palette</p>
        <p className="body-prose mb-6 max-w-prose">
          Two deep tones for dark-background work &mdash; graphics, SharePoint and Teams banners,
          and site-level applications such as T&#375; D&#373;r and Tower Quays. They sit outside the
          primary palette on purpose: Aqua Cyan remains the Aqualogic blue, and these are
          surfaces for it to sit on rather than alternatives to it.
        </p>
        <FullSwatchGrid swatches={aqualogicExtendedColours} columns={2} />
        <ul className="body-prose mt-6 space-y-3 max-w-prose">
          <li><strong>Backgrounds only.</strong> Do not use either tone for the logo, for body copy or as an accent colour.</li>
          <li><strong>Set text in Paper or white.</strong> Both tones are dark enough to carry reversed text comfortably.</li>
          <li><strong>Never against Ink.</strong> Both are too close to Ink (#0C2C3A) in depth to separate &mdash; and too close to each other to be used as a pair.</li>
          <li><strong>Aqua Cyan works on Dark Blue only.</strong> On Dark Teal the contrast is too low to be legible.</li>
        </ul>
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
              ...aqualogicExtendedColours,
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

      <section className="container-page pb-20">
        <h2 className="h-section text-aqualogic-ink">Print and digital</h2>
        <p className="body-prose mt-4 max-w-prose">
          For <strong>digital</strong> work, use HEX. For <strong>print</strong>, use CMYK (uncoated
          stocks tend toward duller, more saturated equivalents; check the proof). For brand-critical
          print runs, request Pantone matches against a fan deck rather than calculated equivalents.
          RGB values are provided for software that needs them.
        </p>
      </section>
    </BrandFrame>
  );
}
