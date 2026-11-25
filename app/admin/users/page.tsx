import { BrandFrame } from '@/components/BrandFrame';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { Callout } from '@/components/Callout';
import { requireAdmin } from '@/lib/require-user';
import { listUsers } from '@/lib/portal-users';
import { signOut } from '@/auth';
import { setUserAccess } from './actions';

export const metadata = { title: 'People | Admin' };
export const dynamic = 'force-dynamic';

const fmt = (iso: string) =>
  new Date(iso).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

const notices: Record<string, string> = {
  removed: 'Access removed. They will be signed out within ten minutes.',
  restored: 'Access restored.'
};

export default async function UsersPage(props: {
  searchParams: Promise<{ status?: string; error?: string }>;
}) {
  const admin = await requireAdmin('/admin/users');
  const searchParams = await props.searchParams;
  const users = await listUsers();

  async function signOutAction() {
    'use server';
    await signOut({ redirectTo: '/sign-in' });
  }

  return (
    <BrandFrame brand="group">
      <Breadcrumbs items={[{ label: 'Portal', href: '/' }, { label: 'Admin' }, { label: 'People' }]} />
      <PageHeader
        eyebrow="Admin / People"
        title="Who has access."
        lede="Everyone who has signed in with their Microsoft account. Remove someone to sign them out and stop them getting back in."
      />

      <section className="container-page pb-6 text-sm text-grey-graphite flex flex-wrap items-center gap-4">
        <span>Signed in as {admin.email}</span>
        <form action={signOutAction}>
          <button type="submit" className="text-aqualogic-cyan underline-offset-2 hover:underline">
            Sign out
          </button>
        </form>
      </section>

      {searchParams.status && notices[searchParams.status] && (
        <section className="container-page pb-6">
          <Callout title="Done">{notices[searchParams.status]}</Callout>
        </section>
      )}
      {searchParams.error === 'self' && (
        <section className="container-page pb-6">
          <Callout title="Not changed" variant="flag">You can&rsquo;t remove your own access.</Callout>
        </section>
      )}

      <section className="container-page pb-20">
        {users.length === 0 ? (
          <p className="text-grey-graphite">Nobody has signed in yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-grey-graphite border-b border-grey-smoke">
                  <th className="py-3 pr-4 font-semibold">Name</th>
                  <th className="py-3 pr-4 font-semibold">Email</th>
                  <th className="py-3 pr-4 font-semibold">Last signed in</th>
                  <th className="py-3 pr-4 font-semibold">Access</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id} className="border-b border-grey-smoke align-middle">
                    <td className="py-3 pr-4 text-aqualogic-ink">{u.name}</td>
                    <td className="py-3 pr-4">{u.email}</td>
                    <td className="py-3 pr-4 whitespace-nowrap">{fmt(u.lastSignIn)}</td>
                    <td className="py-3 pr-4">
                      <form action={setUserAccess} className="flex items-center gap-3">
                        <input type="hidden" name="oid" value={u.oid} />
                        <input type="hidden" name="block" value={u.blocked ? 'false' : 'true'} />
                        <span className={u.blocked ? 'text-red-600' : 'text-aqualogic-ink'}>
                          {u.blocked ? 'Removed' : 'Active'}
                        </span>
                        {u.oid !== admin.oid && (
                          <button
                            type="submit"
                            className="rounded-lg border border-grey-smoke px-3 py-1 hover:border-aqualogic-cyan"
                          >
                            {u.blocked ? 'Restore' : 'Remove'}
                          </button>
                        )}
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </BrandFrame>
  );
}
