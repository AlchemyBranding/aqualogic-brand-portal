type Item = { title: string; detail: string };

export function Recommendations({
  brand,
  items
}: {
  brand: 'Aqualogic' | 'Sustec';
  items: Item[];
}) {
  return (
    <section className="bg-aqualogic-ink text-white">
      <div className="container-page py-14 md:py-20">
        <div className="max-w-prose">
          <p className="eyebrow text-aqualogic-sky mb-3">Recommendations</p>
          <h2 className="h-section text-white">Where the {brand} guidelines are thin</h2>
          <p className="lede text-aqualogic-sky/90 mt-4">
            These are structural gaps in the existing brand guideline document, surfaced so the
            client team can prioritise additions. None of the items below have been invented:
            they are missing rules, not new ones.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6"
            >
              <p className="text-xs text-aqualogic-sky font-semibold tracking-widest">
                REC {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-white font-semibold text-lg">{item.title}</h3>
              <p className="mt-3 text-sm text-aqualogic-sky/90 leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
