'use server';

import { LoginFormSchema } from '@/components/forms/login/login-form-schema';
import { z } from 'zod';

export type ServerAuthResponse = Promise<{
  success: boolean;
  data: { user: { id: number; username: string } } | null;
  errors: { message: string }[] | null;
}>;

export const transformZodErrors = (error: z.ZodError) => {
  return error.issues.map((issue) => ({
    path: issue.path.join('.'),
    message: issue.message
  }));
};

export async function login({
  username,
  password
}: LoginFormSchema): ServerAuthResponse {
  //validate the FormData
  const validatedFields = LoginFormSchema.parse({ username, password });
  console.log('Validated Fields:', validatedFields);

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    return {
      success: true,
      data: {
        user: {
          id: 1,
          username: 'admin'
        }
      },
      errors: null
    };
  }
  return {
    success: false,
    data: null,
    errors: [{ message: 'Invalid username or password' }]
  };
}
