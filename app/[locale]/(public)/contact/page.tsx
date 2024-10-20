import { setRequestLocale } from '@/i18n/request';
import { useTranslations } from 'next-intl';

export default function ContactPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations('ContactPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
