import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { updateSession } from './lib/session';

export default async function middleware() {
  createMiddleware(routing);
  return await updateSession();
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|de)/:path*']
};
