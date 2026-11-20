// Microsoft (Entra ID) sign-in for the portal, via Auth.js v5.
// Only enforced when SSO_ENABLED=true (see lib/sso.ts).

import NextAuth from 'next-auth';
import MicrosoftEntraID from 'next-auth/providers/microsoft-entra-id';
import { entraTenantId, isAdminEmail } from '@/lib/sso';
import { isBlocked, recordSignIn } from '@/lib/portal-users';

// How often a signed-in session re-checks whether an admin has removed them.
const RECHECK_MS = 10 * 60 * 1000;

type EntraProfile = {
  oid?: string;
  tid?: string;
  name?: string;
  email?: string;
  preferred_username?: string;
};

function profileEmail(p: EntraProfile): string {
  return (p.email || p.preferred_username || '').toLowerCase();
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.PORTAL_SSO_SECRET,
  trustHost: true,
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
  pages: { signIn: '/sign-in', error: '/sign-in' },
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
      authorization: { params: { scope: 'openid profile email User.Read' } },
      // Skip the provider's default profile-photo fetch: it stores the photo
      // in the session cookie. Keep only what the portal needs.
      profile(profile: EntraProfile) {
        return {
          id: profile.oid ?? '',
          name: profile.name ?? profileEmail(profile),
          email: profileEmail(profile),
          image: null
        };
      }
    })
  ],
  callbacks: {
    async signIn({ profile }) {
      const p = (profile ?? {}) as EntraProfile;
      // The app registration is single-tenant, so Microsoft already refuses
      // other organisations. Check the tenant again here as a second lock.
      const tenant = entraTenantId();
      if (!tenant || !p.tid || p.tid.toLowerCase() !== tenant || !p.oid) return false;
      if (await isBlocked(p.oid).catch(() => false)) return '/sign-in?error=removed';
      // A failed write to the user list must not stop someone signing in.
      await recordSignIn({ oid: p.oid, name: p.name ?? profileEmail(p), email: profileEmail(p) }).catch((e) =>
        console.error('[auth] could not record sign-in', e)
      );
      return true;
    },
    async jwt({ token, profile }) {
      if (profile) {
        const p = profile as EntraProfile;
        token.oid = p.oid;
        token.email = profileEmail(p);
        token.name = p.name ?? token.email;
        token.checkedAt = Date.now();
        return token;
      }
      // Existing session: every few minutes, make sure nobody removed them.
      if (token.oid && Date.now() - Number(token.checkedAt ?? 0) > RECHECK_MS) {
        try {
          if (await isBlocked(String(token.oid))) return null;
          token.checkedAt = Date.now();
        } catch (e) {
          // Sanity unreachable: keep the session and try again on the next request.
          console.error('[auth] could not re-check access', e);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = String(token.email ?? '');
        session.user.name = String(token.name ?? '');
        (session.user as { oid?: string }).oid = token.oid ? String(token.oid) : undefined;
        (session.user as { isAdmin?: boolean }).isAdmin = isAdminEmail(String(token.email ?? ''));
      }
      return session;
    }
  }
});
