import { NextResponse, type NextRequest } from 'next/server';
import { handlers } from '@/auth';
import { ssoEnabled } from '@/lib/sso';

// Auth.js endpoints (sign-in, Microsoft callback, sign-out). They simply don't
// exist until Microsoft sign-in is switched on.
export async function GET(req: NextRequest) {
  if (!ssoEnabled()) return new NextResponse('Not found', { status: 404 });
  return handlers.GET(req);
}

export async function POST(req: NextRequest) {
  if (!ssoEnabled()) return new NextResponse('Not found', { status: 404 });
  return handlers.POST(req);
}
