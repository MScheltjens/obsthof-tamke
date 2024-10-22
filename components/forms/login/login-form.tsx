'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginFormSchema } from './login-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import { login } from '../../../actions/auth';
import { useState } from 'react';

export const LoginForm = () => {
  const t = useTranslations('LoginForm');
  const [loginError, setLoginError] = useState<string | null>(null);
  const form = useForm<LoginFormSchema>({
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

  const onSubmit: SubmitHandler<LoginFormSchema> = async (data) => {
    const response = await login(data);
    if (response.success) {
      // TODO:we need to setup a session in the app!!!!
      console.log('Login successful!', response.data);
    } else {
      console.log('Login failed, please try again');
      setLoginError('Invalid username or password');
      reset();
    }
  };

  return (
    <Card className="mx-auto mt-6 max-w-4xl">
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 max-w-4xl lg:flex-auto"
        >
          <div className="grid grid-cols-1 gap-6">
            {/* username */}
            <div className="col-span-2 md:col-span-1">
              <Label htmlFor="username">{t('username')}</Label>
              <Input
                id="username"
                type="text"
                placeholder={t('username')}
                {...register('username')}
              />
              {errors.username?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* password */}
            <div className="col-span-2 md:col-span-1">
              <Label htmlFor="password">{t('password')}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t('password')}
                {...register('password')}
              />
              {errors.password?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="default"
              disabled={isSubmitting}
              className="mt-4 w-full hover:bg-primary/50 disabled:opacity-50"
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          </div>
        </form>
        {loginError && <p>{loginError}</p>}
      </CardContent>
    </Card>
  );
};
