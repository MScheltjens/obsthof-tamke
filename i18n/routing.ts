import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localePrefix: 'as-needed',

  // The `pathnames` object maps the English pathnames to the German pathnames.
  pathnames: {
    '/': '/',
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
    },
    '/login': {
      de: '/anmelden',
      en: '/login'
    }
  }
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
