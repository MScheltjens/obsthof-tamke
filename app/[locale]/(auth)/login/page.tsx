import { getAuth } from '@/auth/auth-config';
import { LoginForm } from '@/components/forms/login/login-form';
import { redirect } from '@/i18n/routing';

export default async function LoginPage() {
  const session = await getAuth();
  const user = session?.user;
  if (user) {
    redirect('/admin');
  }
  return <LoginForm />;
}
