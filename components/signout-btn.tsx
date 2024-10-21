'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';

export const SignOutButton = () => {
  const t = useTranslations('SignOutButton');
  return (
    <Button onClick={() => signOut({ callbackUrl: '/' })}>
      {t('signOut')}
    </Button>
  );
};
