import { verdict, type ColourSpec } from '@/lib/colour-systems';

export function ContrastMatrix({
  foregrounds,
  backgrounds
}: {
  foregrounds: ColourSpec[];
  backgrounds: ColourSpec[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-0 text-sm">
        <thead>
          <tr>
            <th className="text-left p-3 bg-grey-cloud/40 border border-grey-smoke text-aqualogic-ink font-semibold">
              Text on background
            </th>
            {backgrounds.map((b) => (
              <th
                key={b.hex}
                className="p-3 text-left font-semibold border border-grey-smoke"
                style={{ backgroundColor: b.hex, color: cellTextColour(b.hex) }}
              >
                {b.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {foregrounds.map((fg) => (
            <tr key={fg.hex}>
              <th
                className="text-left p-3 font-semibold border border-grey-smoke"
                style={{ backgroundColor: fg.hex, color: cellTextColour(fg.hex) }}
              >
                {fg.name}
              </th>
              {backgrounds.map((bg) => {
                const v = verdict(fg.hex, bg.hex);
                const isFail = v.label === 'Fail';
                const isLargeOnly = v.label === 'Pass AA large only';
                return (
                  <td
                    key={bg.hex}
                    className="p-3 border border-grey-smoke align-top"
                    style={{ backgroundColor: bg.hex, color: cellTextColour(bg.hex) }}
                  >
                    <span className="font-mono font-bold">{v.ratio.toFixed(2)}:1</span>
                    <span
                      className={`block text-xs mt-1 font-semibold ${
                        isFail ? 'text-rose-200' : isLargeOnly ? 'text-amber-100' : 'opacity-80'
                      }`}
                    >
                      {v.label}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function cellTextColour(hex: string): string {
  const h = hex.replace('#', '');
  const n = parseInt(h, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const channels = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  const lum = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  return lum < 0.4 ? '#FAFBFF' : '#0C2C3A';
}
