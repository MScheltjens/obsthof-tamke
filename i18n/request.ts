import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { unstable_setRequestLocale } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

// set requested locale at build time
export const setRequestLocale = (locale: string) =>
  unstable_setRequestLocale(locale);
