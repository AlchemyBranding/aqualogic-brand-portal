// Microsoft (Entra ID) sign-in settings.
//
// The whole feature sits behind SSO_ENABLED. While it is not exactly "true",
// nothing here is enforced and the site behaves as before (the old gate in
// middleware.ts stays in charge). Turning it on is a deliberate step.
//
// Env vars (names are the ones Auth.js reads for this provider):
//   SSO_ENABLED                     "true" to switch Microsoft sign-in on
//   AUTH_MICROSOFT_ENTRA_ID_ID      Application (client) ID from Nigel
//   AUTH_MICROSOFT_ENTRA_ID_SECRET  client secret VALUE (never commit it)
//   AUTH_MICROSOFT_ENTRA_ID_ISSUER  https://login.microsoftonline.com/<tenant id>/v2.0
//                                   (NO trailing slash: it must match Microsoft's
//                                   discovery document exactly, or sign-in fails
//                                   with error=Configuration)
//   PORTAL_SSO_SECRET               random string Auth.js uses to encrypt sessions.
//                                   Deliberately NOT AUTH_SECRET: the old gate
//                                   uses that name for its shared-password cookie.
//   PORTAL_ADMIN_EMAILS             comma-separated emails who can manage users

export function ssoEnabled(): boolean {
  return process.env.SSO_ENABLED === 'true';
}

/** The tenant GUID from the issuer URL, used to double-check every sign-in. */
export function entraTenantId(): string | null {
  const issuer = process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER ?? '';
  const match = issuer.match(/login\.microsoftonline\.com\/([0-9a-f-]{36})\//i);
  return match ? match[1].toLowerCase() : null;
}

export function adminEmails(): string[] {
  return (process.env.PORTAL_ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email: string | null | undefined): boolean {
  return Boolean(email) && adminEmails().includes(email!.toLowerCase());
}
