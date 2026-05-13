import Link from 'next/link';

type Props = {
  href: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function NavTile({ href, eyebrow, title, description }: Props) {
  return (
    <Link
      href={href}
      className="group card flex flex-col h-full focus-ring focus-visible:ring-aqualogic-cyan"
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h3 className="h-sub text-aqualogic-ink group-hover:text-aqualogic-cyan transition-colors">
        {title}
      </h3>
      {description && <p className="text-sm text-grey-graphite mt-3 leading-relaxed">{description}</p>}
      <span aria-hidden className="mt-auto pt-6 text-aqualogic-cyan text-sm font-semibold">
        Open &rarr;
      </span>
    </Link>
  );
}
