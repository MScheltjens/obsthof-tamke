import { unstable_setRequestLocale } from 'next-intl/server';

export const setRequestLocale = (locale: string) =>
  unstable_setRequestLocale(locale);
