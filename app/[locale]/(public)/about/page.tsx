import { setRequestLocale } from '@i18n/set-request-locale';
import { useTranslations } from 'next-intl';

export default function AboutPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations('AboutPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
