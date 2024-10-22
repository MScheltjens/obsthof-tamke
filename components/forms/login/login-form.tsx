'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginFormSchema, TLoginFormSchema } from './login-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import { signIn, signOut } from '@/actions/auth';
import { useState } from 'react';

export const LoginForm = () => {
  const t = useTranslations('LoginForm');
  const [loginError, setLoginError] = useState<string | null>(null);
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = form;

  const onSubmit: SubmitHandler<TLoginFormSchema> = async (data) => {
    const response = await signIn(data);
    if (response && response.errors) {
      setLoginError('Invalid username or password');
      reset();
      return;
    }
    console.log(response?.message);
    return response?.message;
  };

  return (
    <Card className="mx-auto max-w-md">
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-2 flex flex-col gap-y-6"
        >
          {/* username */}
          <div>
            <Label htmlFor="username">{t('username')}</Label>
            <Input
              id="username"
              type="text"
              placeholder={t('username')}
              {...register('username')}
              className="mt-1"
            />
            {errors.username?.message && (
              <p className="ml-1 mt-2 text-sm text-rose-400">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* password */}
          <div>
            <Label htmlFor="password">{t('password')}</Label>
            <Input
              id="password"
              type="password"
              placeholder={t('password')}
              {...register('password')}
              className="mt-1"
            />
            {errors.password?.message && (
              <p className="ml-1 mt-2 text-sm text-rose-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {loginError && <p className="text-rose-400">{loginError}</p>}

          <Button
            type="submit"
            variant="default"
            disabled={isSubmitting}
            className="mt-2 hover:bg-primary/50 disabled:opacity-50"
          >
            {isSubmitting ? t('submitting') : t('submit')}
          </Button>
          <p className="mt-4">sign out</p>
          <Button onClick={() => signOut()}>Click me</Button>
        </form>
      </CardContent>
    </Card>
  );
};
