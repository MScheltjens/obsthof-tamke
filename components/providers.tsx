'use client';

import { SessionProvider } from 'next-auth/react';
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
  <SessionProvider>
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  </SessionProvider>
);
