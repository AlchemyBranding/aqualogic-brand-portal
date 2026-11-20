import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { ssoEnabled } from '@/lib/sso';

export const metadata = {
  title: 'Sign in | Sustec Group Brand Portal'
};

export const dynamic = 'force-dynamic';

type SearchParams = { from?: string; error?: string };

// Only same-site paths, so the sign-in can't be used to bounce people elsewhere.
function safePath(from: string | undefined): string {
  if (!from || !from.startsWith('/') || from.startsWith('//')) return '/';
  return from;
}

function errorMessage(error: string | undefined): string | null {
  if (!error) return null;
  if (error === 'removed') return 'Your access to the portal has been removed. Please contact an admin if this is wrong.';
  if (error === 'AccessDenied') return 'This portal is only for Aqualogic and Sustec accounts. Please sign in with your work account.';
  return 'Sign-in didn’t work just then. Please try again.';
}

export default async function SignInPage(props: { searchParams: Promise<SearchParams> | SearchParams }) {
  if (!ssoEnabled()) redirect('/');
  const searchParams = await props.searchParams;
  const from = safePath(searchParams.from);
  const message = errorMessage(searchParams.error);

  async function signInWithMicrosoft() {
    'use server';
    await signIn('microsoft-entra-id', { redirectTo: from });
  }

  return (
    <main className="brand-group min-h-screen bg-aqualogic-paper">
      <div className="container-page py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <section>
          <p className="eyebrow mb-6">Sustec Group</p>
          <h1 className="h-display text-aqualogic-ink mb-6">Brand Portal</h1>
          <p className="lede max-w-prose">
            The working brand bible for Sustec Group and its operating businesses,
            including Aqualogic. Sign in with your Microsoft work account.
          </p>
          <p className="mt-6 text-sm text-grey-graphite">
            Trouble accessing? Contact your IT team or your point of contact at{' '}
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
          <h2 className="h-sub mb-4 text-aqualogic-ink">Sign in</h2>
          {message && (
            <p role="alert" className="mb-4 text-sm text-red-600">
              {message}
            </p>
          )}
          <form action={signInWithMicrosoft}>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-aqualogic-ink text-white py-3 font-semibold hover:bg-aqualogic-cyan transition-colors focus-ring focus-visible:ring-aqualogic-cyan"
            >
              <svg aria-hidden viewBox="0 0 21 21" className="h-5 w-5">
                <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
              </svg>
              Sign in with Microsoft
            </button>
          </form>
          <p className="mt-6 text-xs text-grey-graphite">
            Uses your Aqualogic Microsoft 365 account. You stay signed in for 30 days on this device.
          </p>
        </section>
      </div>
    </main>
  );
}
