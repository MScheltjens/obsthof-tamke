import { z } from 'zod';

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Username is required' })
    .min(2, { message: 'Username must be at least 2 characters' }),
  password: z.string().min(1, { message: 'Password is required' })
});

export type LoginFormSchema = z.infer<typeof LoginFormSchema>;
