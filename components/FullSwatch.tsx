import type { ColourSpec } from '@/lib/colour-systems';

function luminance(hex: string): number {
  const h = hex.replace('#', '');
  const n = parseInt(h, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const channels = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function FullSwatchGrid({ swatches, columns = 4 }: { swatches: ColourSpec[]; columns?: number }) {
  const colsClass =
    columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : columns === 3
        ? 'sm:grid-cols-2 lg:grid-cols-3'
        : 'sm:grid-cols-2';

  return (
    <ul role="list" className={`grid gap-4 ${colsClass}`}>
      {swatches.map((s) => {
        const onDark = luminance(s.hex) < 0.4;
        return (
          <li key={s.hex + s.name} className="rounded-2xl overflow-hidden border border-grey-smoke bg-white">
            <div
              className="h-32 flex items-end p-4"
              style={{ backgroundColor: s.hex, color: onDark ? '#FAFBFF' : '#0C2C3A' }}
              aria-hidden
            >
              <span className="font-semibold tracking-tight">{s.name}</span>
            </div>
            <div className="p-4 text-sm space-y-2">
              <p className="font-semibold text-aqualogic-ink">{s.name}</p>
              <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-grey-graphite">
                <dt className="font-medium">HEX</dt>
                <dd className="font-mono text-aqualogic-ink">{s.hex.toUpperCase()}</dd>
                <dt className="font-medium">RGB</dt>
                <dd className="font-mono">{s.rgb.r}, {s.rgb.g}, {s.rgb.b}</dd>
                <dt className="font-medium">CMYK</dt>
                <dd className="font-mono">{s.cmyk.c}, {s.cmyk.m}, {s.cmyk.y}, {s.cmyk.k}</dd>
                <dt className="font-medium">Pantone</dt>
                <dd className="font-mono">{s.pantone}</dd>
              </dl>
              {s.note && <p className="text-xs text-grey-space mt-2">{s.note}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
