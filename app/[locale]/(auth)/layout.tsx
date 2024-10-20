import { AuthProvider } from '@/components/auth-provider';

// for now we do not need to wrap the entire app with a session provider,
// we only need this in the login and private pages.
// later if there might be a need for a client login we can wrap the entire app with the entire app

export default function AuthLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return <AuthProvider>{children}</AuthProvider>;
}
