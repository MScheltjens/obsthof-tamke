import { LoginForm } from '@/components/forms/login/login-form';
import { setRequestLocale } from '@/i18n/request';
import { useTranslations } from 'next-intl';

export default function LoginPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
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
