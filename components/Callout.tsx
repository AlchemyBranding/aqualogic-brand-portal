type Props = {
  variant?: 'note' | 'flag' | 'quote';
  title?: string;
  children: React.ReactNode;
};

export function Callout({ variant = 'note', title, children }: Props) {
  const styles =
    variant === 'flag'
      ? 'border-amber-300 bg-amber-50 text-amber-900'
      : variant === 'quote'
        ? 'border-aqualogic-cyan/40 bg-aqualogic-sky/10 text-aqualogic-ink'
        : 'border-grey-smoke bg-grey-cloud/30 text-aqualogic-ink';

  return (
    <aside className={`rounded-2xl border-l-4 p-5 ${styles}`}>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="text-sm leading-relaxed">{children}</div>
    </aside>
  );
}
