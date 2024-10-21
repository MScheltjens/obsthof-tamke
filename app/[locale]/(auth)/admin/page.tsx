import { getAuth } from '@/auth/auth-config';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await getAuth();
  if (!session) redirect('/login');
  return <div>Admin Page</div>;
}
