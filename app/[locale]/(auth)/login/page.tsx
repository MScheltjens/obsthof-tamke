import { setRequestLocale } from '@i18n/set-request-locale';

export default async function LoginPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <section>
      <h1>Login</h1>
    </section>
  );
}
