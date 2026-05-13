import { NextResponse } from 'next/server';

const COOKIE = 'portal_auth';
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get('password') ?? '');
  const from = String(form.get('from') ?? '/');

  const expected = process.env.SITE_PASSWORD;
  const secret = process.env.AUTH_SECRET;

  if (!expected || !secret) {
    return NextResponse.json(
      { ok: false, error: 'Server not configured. Set SITE_PASSWORD and AUTH_SECRET.' },
      { status: 500 }
    );
  }

  if (password !== expected) {
    const url = new URL(req.url);
    url.pathname = '/login';
    url.searchParams.set('error', '1');
    if (from && from !== '/') url.searchParams.set('from', from);
    return NextResponse.redirect(url, { status: 303 });
  }

  const safeFrom = from.startsWith('/') ? from : '/';
  const redirectUrl = new URL(safeFrom, req.url);
  const res = NextResponse.redirect(redirectUrl, { status: 303 });
  res.cookies.set(COOKIE, secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: THIRTY_DAYS
  });
  return res;
}
