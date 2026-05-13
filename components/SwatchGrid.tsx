type Swatch = { name: string; hex: string; note?: string };

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.replace('#', '').match(/^([0-9a-f]{6})$/i);
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function luminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 1;
  const channels = [rgb.r, rgb.g, rgb.b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function SwatchGrid({ swatches, columns = 4 }: { swatches: Swatch[]; columns?: number }) {
  return (
    <ul
      role="list"
      className={`grid gap-4 ${columns === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-' + columns}`}
    >
      {swatches.map((s) => {
        const rgb = hexToRgb(s.hex);
        const onDark = luminance(s.hex) < 0.4;
        return (
          <li key={s.hex + s.name} className="rounded-2xl overflow-hidden border border-grey-smoke">
            <div
              className="h-32 flex items-end p-4"
              style={{ backgroundColor: s.hex, color: onDark ? '#FAFBFF' : '#0C2C3A' }}
              aria-hidden
            >
              <span className="font-semibold tracking-tight">{s.name}</span>
            </div>
            <div className="p-4 text-sm bg-white">
              <p className="font-semibold text-aqualogic-ink">{s.name}</p>
              <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-grey-graphite">
                <dt className="font-medium">HEX</dt>
                <dd className="font-mono">{s.hex.toUpperCase()}</dd>
                {rgb && (
                  <>
                    <dt className="font-medium">RGB</dt>
                    <dd className="font-mono">{rgb.r}, {rgb.g}, {rgb.b}</dd>
                  </>
                )}
              </dl>
              {s.note && <p className="text-xs text-grey-space mt-3">{s.note}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
