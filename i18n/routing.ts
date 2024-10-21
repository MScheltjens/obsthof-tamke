import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localePrefix: 'as-needed',

  // The `pathnames` object maps the English pathnames to the German pathnames.
  // we can not really specify a pathname for the login since we need to also define it in the middleware,
  // and we can not opt in on a language there so this throws an error => '/auth': '/auth'

  pathnames: {
    '/': '/',
    '/login': '/login',
    '/admin': '/admin',
    '/about': {
      de: '/ueber-uns',
      en: '/about'
    },
    '/contact': {
      de: '/kontakt',
      en: '/contact'
    },
    '/shop': {
      de: '/geschaeft',
      en: '/shop'
    }
  }
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
