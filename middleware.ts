import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
  
  // Jika user mencoba mengakses halaman auth tapi sudah login
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Jika user mencoba mengakses halaman protected tapi belum login
  if (!isAuthPage && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/create/:path*',
    '/chat/:path*',
    '/novel/:path*',
    '/settings/:path*',
    '/auth/:path*'
  ],
};