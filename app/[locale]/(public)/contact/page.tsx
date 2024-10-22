import { use } from "react";
import { setRequestLocale } from '@/i18n/request';
import { useTranslations } from 'next-intl';

export default function ContactPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = use(props.params);

  const {
    locale
  } = params;

  setRequestLocale(locale);
  const t = useTranslations('ContactPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
