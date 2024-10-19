'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export const AuthButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>Log out</button>
      ) : (
        <button onClick={() => signIn('credentials')}>Log In</button>
      )}
    </>
  );
};
