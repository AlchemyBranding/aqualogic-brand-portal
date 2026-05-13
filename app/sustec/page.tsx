import { BrandFrame } from '@/components/BrandFrame';
import { NavTile } from '@/components/NavTile';

export const metadata = { title: 'Sustec — Brand portal' };

const groups = [
  {
    eyebrow: 'Brand story',
    description: 'How Sustec is positioned and explained at group level.',
    tiles: [
      { href: '/sustec/about', title: 'About Sustec', desc: 'Brand story and role of the group.' },
      { href: '/sustec/group-strategy', title: 'Group strategy', desc: 'Acquisition platform, AMP8 context, buy & build.' },
      { href: '/sustec/architecture', title: 'Brand architecture', desc: 'The Sustec + Aqualogic relationship and how it scales.' },
      { href: '/sustec/heritage', title: 'Heritage', desc: 'Group formation and the wider evolution story.' },
      { href: '/sustec/employer-brand', title: 'Employer brand', desc: 'Group-level recruitment positioning.' }
    ]
  },
  {
    eyebrow: 'Visual elements',
    description: 'How Sustec looks.',
    tiles: [
      { href: '/sustec/visuals/logo', title: 'Logo', desc: 'Lockup, mark, clearspace, usage.' },
      { href: '/sustec/visuals/colour', title: 'Colour', desc: 'Primary blue, signal green, grayscale.' },
      { href: '/sustec/visuals/typography', title: 'Typography', desc: 'Manrope, weights and pairings.' },
      { href: '/sustec/visuals/imagery', title: 'Imagery', desc: 'Photography and imagery direction.' }
    ]
  },
  {
    eyebrow: 'For internal teams',
    description: 'Working with the Sustec brand day to day.',
    tiles: [
      { href: '/linkedin', title: 'LinkedIn setup', desc: 'Personal profile, banners, bio, tagging.' },
      { href: '/sustec/downloads', title: 'Downloads', desc: 'Logos, marketing kit, banners, photography.' },
      { href: '/sustec/recommendations', title: 'Recommendations', desc: 'Where the existing guidelines are thin and what to add.' }
    ]
  }
];

export default function SustecHome() {
  return (
    <BrandFrame brand="sustec">
      <section className="container-page pt-20 md:pt-28 pb-14">
        <p className="eyebrow mb-5">Group brand</p>
        <h1 className="h-display text-aqualogic-ink max-w-[18ch]">Sustec.</h1>
        <p className="mt-6 max-w-prose lede">
          Sustec is the group brand. Its role is to support, connect and future-proof a portfolio
          of operating businesses, while allowing those businesses to retain their own market
          identity and specialist positioning.
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
