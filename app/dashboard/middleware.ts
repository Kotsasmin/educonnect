/*
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const pocketBaseAuthCookie = req.cookies.get('pb_auth'); // Won't work at all

  // TODO: REWIRTE ALL OF IT
  if (pocketBaseAuthCookie) {
    if (req.nextUrl.pathname !== '/dashboard') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  } else {
    if (req.nextUrl.pathname !== '/auth/login') {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/', '/dashboard', '/auth/login'],
};
*/