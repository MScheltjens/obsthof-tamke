import { getAuth } from '@auth/auth-config';
import { AuthButton } from '@components/auth-button';
import { redirect } from '@i18n/routing';

export default async function Page() {
  const session = await getAuth();
  const user = session?.user;

  return user ? (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Admin Page</h1>
      <AuthButton />
    </section>
  ) : (
    redirect('/login')
  );
}
