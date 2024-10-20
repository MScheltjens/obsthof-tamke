import '../globals.css';
import { getMessages } from 'next-intl/server';
import { routing } from '@i18n/routing';
import { setRequestLocale } from '@i18n/set-request-locale';
import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

// generate all the static paths for the pages within this layout
export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));

// generate the metadata for the layout
export const generateMetadata = async ({
  params: { locale }
}: {
  params: { locale: string };
}) => {
  const t = await getTranslations({ locale, namespace: 'MetaData' });
  return {
    title: t('title')
  };
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
