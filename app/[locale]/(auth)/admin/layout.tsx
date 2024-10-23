import { ModalProvider } from '@/components/providers/modal-provider';
import { getSession } from '@/lib/session';

export default async function AuthLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();
  return (
    <div>
      <h1>Admin Layout</h1>
      {children}
      <ModalProvider session={session} />
    </div>
  );
}
