type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  tone?: 'default' | 'inverse' | 'soft';
};

export function Section({ id, eyebrow, title, intro, children, tone = 'default' }: Props) {
  const toneClass =
    tone === 'inverse'
      ? 'bg-aqualogic-ink text-white'
      : tone === 'soft'
        ? 'bg-grey-cloud/40'
        : 'bg-transparent';

  return (
    <section id={id} className={`${toneClass}`}>
      <div className="container-page py-14 md:py-20">
        {(eyebrow || title || intro) && (
          <div className="max-w-prose mb-10">
            {eyebrow && <p className={`eyebrow ${tone === 'inverse' ? 'text-aqualogic-sky' : ''} mb-3`}>{eyebrow}</p>}
            {title && (
              <h2 className={`h-section ${tone === 'inverse' ? 'text-white' : 'text-aqualogic-ink'}`}>
                {title}
              </h2>
            )}
            {intro && (
              <p className={`lede mt-4 ${tone === 'inverse' ? 'text-aqualogic-sky/90' : ''}`}>
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
