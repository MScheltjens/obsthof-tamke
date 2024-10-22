'use server';

import {
  LoginFormSchema,
  TLoginFormSchema
} from '@/components/forms/login/login-form-schema';
import { z } from 'zod';
import { createSession, deleteSession } from '@/lib/session';
import { redirect } from '@/i18n/routing';

export type TServerAuthResponse = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string;
} | null;

export const transformZodErrors = async (error: z.ZodError) => {
  return error.issues.map((issue) => ({
    path: issue.path.join('.'),
    message: issue.message
  }));
};

export const signIn = async ({
  username,
  password
}: TLoginFormSchema): Promise<TServerAuthResponse> => {
  //validate the FormData
  const validatedFields = LoginFormSchema.safeParse({ username, password });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const user = { username: validatedFields.data.username };

  // create the session
  await createSession(user);

  // If the form fields are valid, return a success message
  return {
    message: 'Login successful!'
  };
};

export async function signOut() {
  deleteSession();
  redirect('/');
}
