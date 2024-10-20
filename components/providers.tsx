'use client';

import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

export const Providers = ({
  children,
  intl: { locale, messages }
}: {
  children: React.ReactNode;
  intl: {
    locale: string;
    messages: AbstractIntlMessages;
  };
}) => (
  <NextIntlClientProvider messages={messages} locale={locale}>
    {/* <SessionProvider>{children}</SessionProvider> */}
    {children}
  </NextIntlClientProvider>
);
