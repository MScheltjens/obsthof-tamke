import { LoginForm } from '@/components/forms/login/login-form';
import { useTranslations } from 'next-intl';

export default function AuthPage() {
  const t = useTranslations('AuthPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <LoginForm />
    </div>
  );
}
