// we import the session here so we do not have to have to
// make the authentication layout clientside

'use client';

import { SessionProvider } from 'next-auth/react';

export const AuthProvider = ({
  children
}: Readonly<{ children: React.ReactNode }>) => (
  <SessionProvider>{children}</SessionProvider>
);
