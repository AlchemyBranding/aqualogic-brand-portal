import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { NavTile } from '@/components/NavTile';
import { BrandLogo } from '@/components/BrandLogo';

export const metadata = { title: 'Aqualogic — Brand portal' };

// Reorganised so each tile group has 3-4 clear entries, each entry is the
// single best landing point for that theme rather than a flat dump of every
// language page.
const groups = [
  {
    eyebrow: 'Strategy and story',
    description: 'How Aqualogic is positioned, expressed and explained.',
    tiles: [
      { href: '/aqualogic/strategy', title: 'Strategy', desc: 'Executive summary, business context, market position and the strengths-gaps-opportunities read.' },
      { href: '/aqualogic/positioning', title: 'Positioning and strapline', desc: 'The integrated water conservation and demand management story, and "Intelligent water conservation".' },
      { href: '/aqualogic/purpose', title: 'Purpose, Vision and Mission', desc: 'Why we exist, where we are going, what we do.' },
      { href: '/aqualogic/heritage', title: 'Heritage', desc: 'From Flow Control in 1979 to today.' }
    ]
  },
  {
    eyebrow: 'How we sound and behave',
    description: 'Voice, values, messaging and the audiences they need to land with.',
    tiles: [
      { href: '/aqualogic/voice', title: 'Tone of voice', desc: 'Clear, confident, practical, human.' },
      { href: '/aqualogic/values', title: 'Values and behaviours', desc: 'Trust, Ingenuity, Excellence, Collaboration, Agility.' },
      { href: '/aqualogic/messaging', title: 'Messaging framework', desc: 'Core message and four supporting pillars.' },
      { href: '/aqualogic/audience', title: 'Audience and personas', desc: 'Client and delivery, recruitment, reputation and growth.' }
    ]
  },
  {
    eyebrow: 'Visual identity',
    description: 'How Aqualogic looks.',
    tiles: [
      { href: '/aqualogic/visuals/logo', title: 'Logo', desc: 'Lockup, mark, clearspace, usage rules.' },
      { href: '/aqualogic/visuals/colour', title: 'Colour', desc: 'Live swatches with HEX, RGB and usage notes.' },
      { href: '/aqualogic/visuals/typography', title: 'Typography', desc: 'Manrope, weights, scale and pairings.' },
      { href: '/aqualogic/visuals/imagery', title: 'Imagery', desc: 'Photography direction and dos and donts.' }
    ]
  },
  {
    eyebrow: 'For internal teams',
    description: 'Working with the Aqualogic brand day to day.',
    tiles: [
      { href: '/aqualogic/architecture', title: 'Brand architecture', desc: 'How Aqualogic relates to Sustec.' },
      { href: '/aqualogic/employer-brand', title: 'Employer brand', desc: 'Established, growing, human, full of opportunity.' },
      { href: '/linkedin', title: 'LinkedIn setup', desc: 'Personal profile, banners, professional headline, company page treatment.' },
      { href: '/case-studies', title: 'Case studies', desc: 'Submit a project and browse the case study library.' },
      { href: '/aqualogic/downloads', title: 'Downloads', desc: 'Logos, marketing kit, banners, photography, headshots.' }
    ]
  }
];

export default function AqualogicHome() {
  return (
    <BrandFrame brand="aqualogic">
      <Breadcrumbs items={[{ label: 'Portal', href: '/' }, { label: 'Aqualogic' }]} />

      <section className="container-page pt-10 pb-14">
        <p className="eyebrow mb-8">Operating brand</p>
        <h1 className="sr-only">Aqualogic</h1>
        <BrandLogo
          brand="aqualogic"
          variant="lockup"
          className="h-24 md:h-32 lg:h-40 w-auto"
          fallbackToText={true}
        />
        <p className="mt-8 text-aqualogic-cyan font-semibold text-xl tracking-tight">
          Intelligent water conservation.
        </p>
        <p className="lede mt-6 max-w-prose">
          An integrated water conservation and demand management business, helping water companies
          reduce waste, improve performance and strengthen long-term resilience through connected
          network, customer and field-based delivery.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.eyebrow} className="container-page pb-14">
          <header className="max-w-prose mb-6">
            <p className="eyebrow mb-2">{group.eyebrow}</p>
            <p className="text-grey-graphite">{group.description}</p>
          </header>
          <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {group.tiles.map((tile) => (
              <li key={tile.href}>
                <NavTile href={tile.href} title={tile.title} description={tile.desc} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </BrandFrame>
  );
}
