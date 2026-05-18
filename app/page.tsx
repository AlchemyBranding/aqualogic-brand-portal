import Link from 'next/link';
import { BrandFrame } from '@/components/BrandFrame';
import { BrandLogo } from '@/components/BrandLogo';

export default function HomePage() {
  return (
    <BrandFrame brand="group">
      <section className="container-page pt-20 md:pt-28 pb-12">
        <p className="eyebrow mb-6">Sustec Group / Brand Portal</p>
        <h1 className="h-display text-aqualogic-ink max-w-[16ch]">
          The working brand bible for the group and its operating businesses.
        </h1>
        <p className="lede mt-8 max-w-prose">
          This portal is for internal teams across Sustec and its operating companies, starting
          with Aqualogic. It is the live source of truth for how each brand should look, sound and
          be used.
        </p>
      </section>

      <section className="container-page pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/sustec"
            className="group rounded-3xl bg-sustec-blue text-white p-8 md:p-12 flex flex-col min-h-[280px] focus-ring focus-visible:ring-sustec-green transition-shadow hover:shadow-[0_18px_40px_rgba(0,146,210,0.35)]"
          >
            <p className="eyebrow text-white/80 mb-6">Group brand</p>
            <h2 className="sr-only">Sustec</h2>
            <BrandLogo
              brand="sustec"
              variant="reverse"
              className="h-14 md:h-20 w-auto self-start"
              fallbackToText={true}
            />
            <p className="mt-6 text-white/85 max-w-prose">
              The parent brand that supports, connects and future-proofs a portfolio of operating
              businesses, while letting each one keep its market identity.
            </p>
            <span aria-hidden className="mt-auto pt-10 text-sustec-green font-semibold">
              Open Sustec area &rarr;
            </span>
          </Link>

          <Link
            href="/aqualogic"
            className="group rounded-3xl bg-aqualogic-ink text-white p-8 md:p-12 flex flex-col min-h-[280px] focus-ring focus-visible:ring-aqualogic-cyan transition-shadow hover:shadow-[0_18px_40px_rgba(0,182,219,0.25)]"
          >
            <p className="eyebrow text-aqualogic-sky mb-6">Operating brand</p>
            <h2 className="sr-only">Aqualogic</h2>
            <BrandLogo
              brand="aqualogic"
              variant="reverse"
              className="h-14 md:h-20 w-auto self-start"
              fallbackToText={true}
            />
            <p className="mt-6 text-aqualogic-sky/90 max-w-prose">
              Intelligent water conservation. An integrated water conservation and demand
              management business, working across the water journey from source to tap.
            </p>
            <span aria-hidden className="mt-auto pt-10 text-aqualogic-cyan font-semibold">
              Open Aqualogic area &rarr;
            </span>
          </Link>

          <FuturePlaceholder />
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CrossLink
            title="LinkedIn guidance"
            description="Personal profile, banners, professional headline, company page."
            href="/linkedin"
          />
          <CrossLink
            title="Case studies"
            description="Submit a project and browse the case study library."
            href="/case-studies"
          />
          <CrossLink
            title="News"
            description="Submit and browse news, press releases, sector commentary and coverage."
            href="/news"
          />
          <CrossLink
            title="Aqualogic downloads"
            description="Logos, marketing kit, banners, photography, headshots."
            href="/aqualogic/downloads"
          />
          <CrossLink
            title="Sustec downloads"
            description="Group brand assets: logos, marketing kit and more."
            href="/sustec/downloads"
          />
        </div>
      </section>
    </BrandFrame>
  );
}

function FuturePlaceholder() {
  return (
    <div className="rounded-3xl border border-dashed border-grey-smoke p-8 md:p-12 flex flex-col min-h-[280px] md:col-span-2 bg-grey-cloud/30">
      <p className="eyebrow mb-4">Future operating brand</p>
      <h3 className="h-section text-grey-graphite max-w-[26ch]">
        Reserved for the next business that joins the Sustec portfolio.
      </h3>
      <p className="mt-4 text-grey-graphite max-w-prose text-sm">
        The architecture is built to scale. As Sustec acquires further operating companies, a new
        brand area can be added here and on the top navigation without restructuring the portal.
      </p>
    </div>
  );
}

function CrossLink({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="card flex flex-col focus-ring focus-visible:ring-aqualogic-cyan"
    >
      <h3 className="h-sub text-aqualogic-ink">{title}</h3>
      <p className="text-sm text-grey-graphite mt-3 leading-relaxed">{description}</p>
      <span aria-hidden className="mt-auto pt-6 text-aqualogic-cyan text-sm font-semibold">
        Open &rarr;
      </span>
    </Link>
  );
}
