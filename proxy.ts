import { NextRequest, NextResponse, type NextFetchEvent } from 'next/server';
import { auth } from '@/auth';

// Who can see the portal, in order:
//
// 1. PORTAL_PUBLIC=true      Everyone, no sign-in (the kill switch). Pages that
//                            publish content still need Microsoft sign-in when
//                            SSO_ENABLED=true (they check it themselves).
// 2. SSO_ENABLED=true        Whole site behind Microsoft sign-in. The shared
//                            password and its cookie no longer work; /login
//                            forwards to /sign-in.
// 3. Otherwise               The old shared-password gate (portal_auth cookie).

const AUTH_COOKIE = 'portal_auth';

const isSso = () => process.env.SSO_ENABLED === 'true';

// Only what the Microsoft sign-in page itself needs is open to signed-out
// visitors. Brand images and downloads are NOT, unlike the old gate.
function isSsoPublic(pathname: string): boolean {
  return (
    pathname === '/sign-in' ||
    pathname.startsWith('/api/auth/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname === '/icon.png' ||
    pathname === '/icon.svg' ||
    pathname === '/apple-icon.png'
  );
}

// Runs Auth.js (it re-checks the People list every ten minutes and keeps the
// session cookie fresh), then sends anyone without a session to /sign-in.
const ssoGate = auth((req) => {
  const { pathname, search } = req.nextUrl;
  if (pathname === '/login' || pathname.startsWith('/api/login')) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl));
  }
  if (isSsoPublic(pathname) || req.auth?.user) return NextResponse.next();
  const url = new URL('/sign-in', req.nextUrl);
  url.searchParams.set('from', pathname + search);
  return NextResponse.redirect(url);
});

function passwordGate(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public routes
  if (
    pathname === '/login' ||
    pathname.startsWith('/api/login') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|gif|woff2?)$/i)
  ) {
    return NextResponse.next();
  }

  const expected = process.env.AUTH_SECRET;
  const cookie = req.cookies.get(AUTH_COOKIE)?.value;

  if (!expected || cookie !== expected) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Microsoft only accepts sign-ins that return to the address registered in
// Entra (www.sustecgroupportal.com). On production, forward any vercel.app
// alias there first, or sign-in fails with AADSTS50011. Previews keep their own
// addresses (VERCEL_ENV is "preview" there).
const CANONICAL_HOST = 'www.sustecgroupportal.com';

function canonicalRedirect(req: NextRequest): NextResponse | null {
  const host = (req.headers.get('host') ?? '').toLowerCase();
  if (process.env.VERCEL_ENV !== 'production' || !host.endsWith('.vercel.app')) return null;
  const url = new URL(req.nextUrl.pathname + req.nextUrl.search, `https://${CANONICAL_HOST}`);
  return NextResponse.redirect(url, 308);
}

export function proxy(req: NextRequest, ev: NextFetchEvent) {
  const canonical = canonicalRedirect(req);
  if (canonical) return canonical;

  const { pathname } = req.nextUrl;

  if (process.env.PORTAL_PUBLIC === 'true') {
    // The shared password is retired once Microsoft sign-in is on.
    if (isSso() && (pathname === '/login' || pathname.startsWith('/api/login'))) {
      return NextResponse.redirect(new URL('/sign-in', req.nextUrl));
    }
    return NextResponse.next();
  }

  if (isSso()) {
    return (ssoGate as unknown as (r: NextRequest, e: NextFetchEvent) => ReturnType<typeof passwordGate>)(req, ev);
  }

  return passwordGate(req);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
