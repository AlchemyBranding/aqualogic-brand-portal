type SearchParams = { error?: string; from?: string };

export const metadata = {
  title: 'Sign in — Sustec Group Brand Portal'
};

export default function LoginPage({ searchParams }: { searchParams: SearchParams }) {
  const hasError = searchParams.error === '1';
  const from = searchParams.from ?? '/';

  return (
    <main className="brand-group min-h-screen bg-aqualogic-paper">
      <div className="container-page py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <section>
          <p className="eyebrow mb-6">Sustec Group</p>
          <h1 className="h-display text-aqualogic-ink mb-6">
            Brand Portal
          </h1>
          <p className="lede max-w-prose">
            The working brand bible for Sustec Group and its operating businesses,
            including Aqualogic. This space is for internal teams. Please sign in
            with the master password supplied by{' '}
            <a
              href="https://www.alchemybranding.studio"
              target="_blank"
              rel="noreferrer"
              className="text-aqualogic-cyan underline-offset-2 hover:underline"
            >
              Alchemy
            </a>
            .
          </p>
          <p className="mt-6 text-sm text-grey-graphite">
            Trouble accessing? Contact your point of contact at{' '}
            <a
              href="https://www.alchemybranding.studio"
              target="_blank"
              rel="noreferrer"
              className="text-aqualogic-cyan underline-offset-2 hover:underline"
            >
              Alchemy
            </a>
            .
          </p>
        </section>

        <section className="card max-w-md w-full md:justify-self-end">
          <h2 className="h-sub mb-4 text-aqualogic-ink">Enter password</h2>
          <form method="POST" action="/api/login" className="space-y-4">
            <input type="hidden" name="from" value={from} />
            <label className="block">
              <span className="sr-only">Password</span>
              <input
                type="password"
                name="password"
                required
                autoFocus
                autoComplete="current-password"
                aria-invalid={hasError ? 'true' : 'false'}
                className="w-full rounded-xl border border-grey-smoke bg-white px-4 py-3 text-base focus-ring focus-visible:ring-aqualogic-cyan"
                placeholder="Password"
              />
            </label>
            {hasError && (
              <p role="alert" className="text-sm text-red-600">
                That password didn&rsquo;t match. Please try again.
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-xl bg-aqualogic-ink text-white py-3 font-semibold hover:bg-aqualogic-cyan transition-colors focus-ring focus-visible:ring-aqualogic-cyan"
            >
              Sign in
            </button>
          </form>
          <p className="mt-6 text-xs text-grey-graphite">
            One master password unlocks the portal for 30 days on this device.
          </p>
        </section>
      </div>
    </main>
  );
}
