import { AuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' }
      },
      authorize(credentials) {
        if (
          credentials?.username === 'admin' &&
          credentials.password === 'admin'
        ) {
          return { id: '1', name: 'admin' };
        }

        return null;
      }
    })
  ]
};

// minimalize imports in other files
export const getAuth = () => getServerSession(authOptions);
