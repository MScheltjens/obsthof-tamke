import { AuthButton } from '@components/auth-button';
import { authOptions } from '@auth/config';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Admin Page</h1>
      <p className="mt-4 text-lg">Welcome, {user ? user.name : 'guest'}!</p>
      <AuthButton />
    </section>
  );
}
