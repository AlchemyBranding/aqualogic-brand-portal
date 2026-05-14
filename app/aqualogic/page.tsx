import { BrandFrame } from '@/components/BrandFrame';
import { NavTile } from '@/components/NavTile';
import { BrandLogo } from '@/components/BrandLogo';

export const metadata = { title: 'Aqualogic — Brand portal' };

const groups = [
  {
    eyebrow: 'Language elements',
    description: 'How Aqualogic is described, expressed and explained.',
    tiles: [
      { href: '/aqualogic/strategy', title: 'Strategy', desc: 'Executive summary, business context, market position.' },
      { href: '/aqualogic/positioning', title: 'Positioning', desc: 'The integrated water conservation and demand management story.' },
      { href: '/aqualogic/strapline', title: 'Strapline', desc: '"Intelligent water conservation" and how to use it.' },
      { href: '/aqualogic/purpose', title: 'Purpose, Vision, Mission', desc: 'Why we exist, where we are going, what we do.' },
      { href: '/aqualogic/values', title: 'Values and behaviours', desc: 'Trust, Ingenuity, Excellence, Collaboration, Agility.' },
      { href: '/aqualogic/voice', title: 'Tone of voice', desc: 'Clear, confident, practical, human.' },
      { href: '/aqualogic/messaging', title: 'Messaging framework', desc: 'Core message and four supporting pillars.' },
      { href: '/aqualogic/audience', title: 'Audience and personas', desc: 'Client, recruitment, reputation.' },
      { href: '/aqualogic/heritage', title: 'Heritage', desc: 'From Flow Control to today.' },
      { href: '/aqualogic/architecture', title: 'Brand architecture', desc: 'Relationship to Sustec.' }
    ]
  },
  {
    eyebrow: 'Visual elements',
    description: 'How Aqualogic looks.',
    tiles: [
      { href: '/aqualogic/visuals/logo', title: 'Logo', desc: 'Lockup, mark, clearspace, usage.' },
      { href: '/aqualogic/visuals/colour', title: 'Colour', desc: 'Live swatches with HEX and RGB values.' },
      { href: '/aqualogic/visuals/typography', title: 'Typography', desc: 'Manrope, weights and pairings.' },
      { href: '/aqualogic/visuals/imagery', title: 'Imagery', desc: 'Photography and imagery direction.' }
    ]
  },
  {
    eyebrow: 'For internal teams',
    description: 'Working with the Aqualogic brand day to day.',
    tiles: [
      { href: '/aqualogic/employer-brand', title: 'Employer brand', desc: 'Established, growing, human, full of opportunity.' },
      { href: '/linkedin', title: 'LinkedIn setup', desc: 'Personal profile, banners, bio, tagging.' },
      { href: '/aqualogic/downloads', title: 'Downloads', desc: 'Logos, marketing kit, banners, photography.' },
      { href: '/aqualogic/recommendations', title: 'Recommendations', desc: 'Where the existing guidelines are thin and what to add.' }
    ]
  }
];

export default function AqualogicHome() {
  return (
    <BrandFrame brand="aqualogic">
      <section className="container-page pt-16 md:pt-24 pb-14">
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
