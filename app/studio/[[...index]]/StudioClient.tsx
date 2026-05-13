'use client';

import dynamic from 'next/dynamic';

// Both the Studio component and the sanity.config import are deferred inside
// the dynamic loader so the heavy Sanity bundle is only resolved at runtime
// when /studio is actually visited. This avoids a build-time failure when
// Sanity is not configured.
const Studio = dynamic(
  async () => {
    const [{ NextStudio }, configMod] = await Promise.all([
      import('next-sanity/studio'),
      import('../../../sanity.config')
    ]);
    const config = configMod.default;
    return function Wrapped() {
      return <NextStudio config={config} />;
    };
  },
  { ssr: false, loading: () => <Loading /> }
);

export default function StudioClient() {
  return <Studio />;
}

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center text-grey-graphite">
      Loading Studio&hellip;
    </div>
  );
}
