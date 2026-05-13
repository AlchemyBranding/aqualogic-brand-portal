type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, lede, children }: Props) {
  return (
    <header className="container-page pt-16 md:pt-24 pb-10">
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h1 className="h-display text-aqualogic-ink max-w-[18ch]">{title}</h1>
      {lede && <p className="lede mt-6 max-w-prose">{lede}</p>}
      {children && <div className="mt-8">{children}</div>}
    </header>
  );
}
