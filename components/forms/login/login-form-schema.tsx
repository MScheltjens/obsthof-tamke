import { z } from 'zod';

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Username is required' })
    .min(2, { message: 'Username must be at least 2 characters long.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.'
    })
    .trim()
});

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;
