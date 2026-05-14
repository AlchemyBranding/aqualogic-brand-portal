import fs from 'node:fs';
import path from 'node:path';

type Brand = 'aqualogic' | 'sustec' | 'group';
type Variant = 'mark' | 'lockup' | 'reverse';

type Props = {
  brand: Brand;
  variant?: Variant;
  className?: string;
  height?: number;
  // When true, render the lockup mark + wordmark together. When false, mark only.
  fallbackToText?: boolean;
};

// Hard-coded paths matching the naming convention used in
// /public/assets/<brand>/logos. The portal's getAssets() reader is the
// source of truth for downloads; this component is a thin presentational
// helper that only knows where to find the recommended preview asset.
const PATHS: Record<Brand, Partial<Record<Variant, string>>> = {
  aqualogic: {
    mark: '/assets/aqualogic/logos/aqualogic-mark-cyan.svg',
    lockup: '/assets/aqualogic/logos/aqualogic-logo-primary-fullcolour.svg',
    // True reverse: white wordmark + cyan mark, transparent background.
    // The cyan-panel variant lives at /aqualogic/visuals/logo as the
    // "Reverse on dark" preview where the panel context makes sense.
    reverse: '/assets/aqualogic/logos/aqualogic-logo-reverse-wordmark-white.svg'
  },
  sustec: {
    mark: '/assets/sustec/logos/sustec-mark-fullcolour.svg',
    lockup: '/assets/sustec/logos/sustec-logo-primary-fullcolour.svg',
    // True transparent reverse: all-white lockup, no background panel.
    // Generated from the primary by swapping the brand colours for white.
    reverse: '/assets/sustec/logos/sustec-logo-reverse-wordmark-white.svg'
  },
  group: {}
};

const PUBLIC_ROOT = path.join(process.cwd(), 'public');

function fileExists(relPath: string): boolean {
  try {
    return fs.statSync(path.join(PUBLIC_ROOT, relPath.replace(/^\//, ''))).isFile();
  } catch {
    return false;
  }
}

export function BrandLogo({
  brand,
  variant = 'lockup',
  className,
  height,
  fallbackToText = true
}: Props) {
  const src = PATHS[brand][variant];
  const has = src ? fileExists(src) : false;

  if (has && src) {
    return (
      <img
        src={src}
        alt={brand === 'aqualogic' ? 'Aqualogic' : brand === 'sustec' ? 'Sustec' : 'Sustec Group'}
        style={height ? { height } : undefined}
        className={className}
      />
    );
  }

  if (!fallbackToText) return null;

  const label = brand === 'aqualogic' ? 'Aqualogic' : brand === 'sustec' ? 'Sustec' : 'Sustec Group';
  return (
    <span
      className={`font-extrabold tracking-tight text-aqualogic-ink ${className ?? ''}`}
      style={height ? { fontSize: Math.round(height * 0.65), lineHeight: 1 } : undefined}
    >
      {label}
    </span>
  );
}
