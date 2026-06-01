import { NextRequest, NextResponse } from 'next/server';

const AUTH_COOKIE = 'portal_auth';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Temporary public-access kill switch. Set PORTAL_PUBLIC=true on the
  // environment (Vercel or .env.local) to bypass the password gate entirely.
  // Remove the env var (or set to anything other than 'true') to re-enable.
  if (process.env.PORTAL_PUBLIC === 'true') {
    return NextResponse.next();
  }

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

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
