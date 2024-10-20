import { setRequestLocale } from '@/i18n/request';

export default function LoginPage({
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
