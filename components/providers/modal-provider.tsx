'use client';
import { useEffect, useState } from 'react';
import { LoginFormModal } from '@/forms/login/login-form-modal';
import { JWTPayload } from 'jose';

export const ModalProvider = ({
  session
}: {
  session: JWTPayload | null | undefined;
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // we see if the component is mounted to avoid SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // we only want to show the loginModal if there is no session and when the clientside is mounted
  if (!isMounted || session) return null;

  return <LoginFormModal />;
};
