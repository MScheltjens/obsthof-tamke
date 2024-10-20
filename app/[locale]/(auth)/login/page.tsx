import { LoginForm } from '@forms/login/login-form';
import { setRequestLocale } from '@i18n/set-request-locale';

export default function Page({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <section>
      <h1>Login</h1>
      <LoginForm />
    </section>
  );
}
