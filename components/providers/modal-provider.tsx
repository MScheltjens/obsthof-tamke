'use client';
import { useEffect, useState } from 'react';
import { LoginFormModal } from '@/forms/login/login-form-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // we see if the component is mounted to avoid SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <LoginFormModal />;
};
