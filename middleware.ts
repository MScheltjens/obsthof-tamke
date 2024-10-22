import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { updateSession } from '@/lib/session'; // hypothetical session utility
import { NextRequest } from 'next/server';

const middleware = createMiddleware(routing);

export default async function (req: NextRequest) {
  // Update the session before calling the original middleware
  await updateSession();
  // Call the original middleware function
  return middleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|de)/:path*']
};
