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

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
