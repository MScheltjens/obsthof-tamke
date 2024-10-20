import { getAuth } from '@/auth/auth-config';
import { redirect } from '@/i18n/routing';
import { setRequestLocale } from '@/i18n/request';

export default async function AdminPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const session = await getAuth();
  const user = session?.user;
  console.log('user', user);

  return user ? (
    <section>
      <h1>Admin Page</h1>
      {/* TODO: make signout btn (also make sure admin is always logged out) */}
    </section>
  ) : (
    redirect('/login')
  );
}