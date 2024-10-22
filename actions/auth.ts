'use server';

import {
  LoginFormSchema,
  TLoginFormSchema
} from '@/components/forms/login/login-form-schema';
import { z } from 'zod';

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

export async function authenticate({
  username,
  password
}: TLoginFormSchema): Promise<TServerAuthResponse> {
  //validate the FormData
  const validatedFields = LoginFormSchema.safeParse({ username, password });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  // Check if the username and password are correct (hardcoded for now)
  // setup a session or token for the user
  if (username !== process.env.USERNAME || password !== process.env.PASSWORD) {
    return {
      errors: {
        username: ['Invalid username'],
        password: ['Invalid password']
      }
    };
  }
  // If the form fields are valid, return a success message
  return {
    message: 'Login successful!'
  };
}
