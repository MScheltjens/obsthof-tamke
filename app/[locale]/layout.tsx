import { getMessages } from 'next-intl/server';
import '../globals.css';
import { Providers } from '@components/providers';

export default async function LocaleLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className="antialiased">
        <Providers intl={{ locale, messages }}>{children}</Providers>
      </body>
    </html>
  );
}
