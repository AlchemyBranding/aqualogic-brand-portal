import Link from 'next/link';

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.16em] font-semibold text-grey-graphite">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-aqualogic-cyan transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={isLast ? 'text-aqualogic-ink' : ''}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden className="text-grey-steel">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
