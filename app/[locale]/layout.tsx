import '../globals.css';
import { getMessages } from 'next-intl/server';
import { Providers } from '@components/providers';
import { routing } from '@i18n/routing';
import { setRequestLocale } from '@i18n/set-request-locale';

// generate all the static paths for the pages within this layout
export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));

//translate the metadata for the page
// export const generateMetaData = async ({
//   params: { locale }
// }: {
//   params: { locale: string };
// }) => {
//   const t = await getTranslations({ locale, namespace: ['Metadata'] });
//   return {
//     title: t('title'),
//     description: t('description')
//   };
// };

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
        <Providers intl={{ locale, messages }}>{children}</Providers>
      </body>
    </html>
  );
}
