type Brand = 'aqualogic' | 'sustec';

type Milestone = {
  year: string;
  title: string;
  body: string;
};

const timeline: Milestone[] = [
  {
    year: '1979',
    title: 'Flow Control',
    body: 'Originally a company called Flow Control, started by Mike Rice. Roots in practical water conservation and operational delivery.'
  },
  {
    year: '2004',
    title: 'Aqualogic is born',
    body: 'Aqualogic was born out of a partial acquisition of Flow Control. Ben Rice appointed Managing Director.'
  },
  {
    year: '2014',
    title: 'Major framework wins',
    body: 'The non-compete clause from the previous acquisition expires. Aqualogic wins major UK framework tenders and begins to scale.'
  },
  {
    year: '2020',
    title: 'Digital and customer expansion',
    body: 'Continued growth in Field Services and client services across UK water. Introduction of Virtual Water Audits and Digital Leakage detection.'
  },
  {
    year: '2025',
    title: 'MBO and Sustec',
    body: 'Aqualogic crosses 250 employees. Ben Rice and Ashley Williams complete a management buy-out through a new holding company, Sustec Ltd (Sustainable Technologies Limited).'
  }
];

export function HeritageTimeline({ brand }: { brand: Brand }) {
  const isSustec = brand === 'sustec';
  // Sustec uses its blue/green; Aqualogic uses its cyan/ink.
  const styles = isSustec
    ? {
        accent: 'bg-sustec-blue text-white',
        accentDot: 'bg-sustec-blue',
        accentGreen: 'bg-sustec-green',
        railFrom: 'from-sustec-blue/40',
        railTo: 'to-sustec-green/40',
        yearText: 'text-sustec-blue',
        marker: 'border-sustec-blue',
        subtitle: 'text-grey-graphite',
        cardBorder: 'border-grey-smoke'
      }
    : {
        accent: 'bg-aqualogic-cyan text-aqualogic-ink',
        accentDot: 'bg-aqualogic-cyan',
        accentGreen: 'bg-aqualogic-sky',
        railFrom: 'from-aqualogic-cyan/40',
        railTo: 'to-aqualogic-sky/40',
        yearText: 'text-aqualogic-cyan',
        marker: 'border-aqualogic-cyan',
        subtitle: 'text-grey-graphite',
        cardBorder: 'border-grey-smoke'
      };

  return (
    <div className="relative">
      {/* Vertical rail */}
      <div
        aria-hidden
        className={`absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b ${styles.railFrom} via-grey-smoke ${styles.railTo}`}
      />
      <ol role="list" className="space-y-8 lg:space-y-10">
        {timeline.map((m, i) => {
          const isLast = i === timeline.length - 1;
          return (
            <li key={m.year} className="relative pl-12">
              <span
                aria-hidden
                className={`absolute left-0 top-2 grid place-items-center w-9 h-9 rounded-full bg-white border-2 ${styles.marker} shadow-sm`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${isLast ? styles.accentGreen : styles.accentDot}`} />
              </span>
              <div className="flex flex-col gap-1">
                <p className={`font-mono font-bold tracking-tight text-2xl md:text-3xl ${styles.yearText}`}>
                  {m.year}
                </p>
                <h3 className="h-sub text-aqualogic-ink">{m.title}</h3>
                <p className={`mt-2 max-w-prose ${styles.subtitle}`}>{m.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
