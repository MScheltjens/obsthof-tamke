import { use } from "react";
import { LoginForm } from '@/components/forms/login/login-form';
import { setRequestLocale } from '@/i18n/request';
import { useTranslations } from 'next-intl';

export default function LoginPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = use(props.params);

  const {
    locale
  } = params;

  setRequestLocale(locale);
  const t = useTranslations('LoginPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <LoginForm />
    </div>
  );
}
