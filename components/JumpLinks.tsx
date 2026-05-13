type Props = {
  items: { id: string; label: string }[];
};

export function JumpLinks({ items }: Props) {
  return (
    <nav aria-label="On this page" className="card sticky top-6 hidden lg:block">
      <p className="eyebrow mb-3">On this page</p>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-grey-graphite hover:text-aqualogic-cyan transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
