import { getAuth } from '@/auth/auth-config';
import { SignOutButton } from '@/components/signout-btn';

import { getTranslations } from 'next-intl/server';

export default async function AdminPage() {
  const session = await getAuth();
  const t = await getTranslations('AdminPage');
  const user = session?.user;

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      {user && <SignOutButton />}
    </div>
  );
}
