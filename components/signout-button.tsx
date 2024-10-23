'use client';
import { signOut } from '@/actions/auth';
import { Button } from './ui/button';

export const SignoutButton = () => (
  <Button onClick={() => signOut()}>Sign Out</Button>
);
