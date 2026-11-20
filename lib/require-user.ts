import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { ssoEnabled } from '@/lib/sso';

export type PortalSessionUser = {
  name: string;
  email: string;
  oid?: string;
  isAdmin: boolean;
};

/**
 * Use at the top of any page or server action that must be signed in.
 * While Microsoft sign-in is switched off it returns null and lets the request
 * through, so behaviour stays exactly as before until the switch is flipped.
 */
export async function requireUser(returnTo: string): Promise<PortalSessionUser | null> {
  if (!ssoEnabled()) return null;
  const session = await auth();
  if (!session?.user) {
    redirect(`/sign-in?from=${encodeURIComponent(returnTo)}`);
  }
  const u = session.user as { name?: string | null; email?: string | null; oid?: string; isAdmin?: boolean };
  return { name: u.name ?? '', email: u.email ?? '', oid: u.oid, isAdmin: Boolean(u.isAdmin) };
}

/** Admin pages: signed in AND on PORTAL_ADMIN_EMAILS. Admins only exist once sign-in is on. */
export async function requireAdmin(returnTo: string): Promise<PortalSessionUser> {
  if (!ssoEnabled()) redirect('/');
  const user = await requireUser(returnTo);
  if (!user?.isAdmin) redirect('/');
  return user;
}
