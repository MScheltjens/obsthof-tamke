import { getSession } from '@/lib/session';
import { setRequestLocale } from '@/i18n/request';
import { LoginFormModal } from '@/components/forms/login/login-form-modal';
import { getTranslations } from 'next-intl/server';
import { SignoutButton } from '@/components/signout-button';

export default async function AdminPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  // we pass the session in the loginModal so render only if there is a session, otherwise we render the page
  const session = await getSession();
  const t = await getTranslations('AdminPage');

  return (
    <div className="flex h-screen justify-center bg-slate-200">
      {session !== null ? (
        <div>
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
          <SignoutButton />
        </div>
      ) : (
        <LoginFormModal session={session} />
      )}
    </div>
  );
}
