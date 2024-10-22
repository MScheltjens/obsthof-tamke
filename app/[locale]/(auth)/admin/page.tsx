import { getSession } from '@/lib/session';
import { LoginForm } from '@/components/forms/login/login-form';
import { setRequestLocale } from '@/i18n/request';
import { getTranslations } from 'next-intl/server';

export default async function AdminPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('AdminPage');
  setRequestLocale(locale);

  // TODO: we need to check for a admin user here or redirect to a login page or popup a login modal
  const session = await getSession();

  return (
    <div className="flex h-screen justify-center bg-slate-200">
      <div>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <LoginForm />
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  );
}
