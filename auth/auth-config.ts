import CredentialsProvider from 'next-auth/providers/credentials';
import { getServerSession } from 'next-auth';

// the only user is admin with password admin, so actually no need to use next-auth. but it's a good example,
// it might be necessary that the administrator wants to log in with google later

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'your username'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // no need to make a call to a db, there is currently only one user
        if (
          credentials?.username === process.env.USERNAME &&
          credentials?.password === process.env.PASSWORD
        ) {
          const user = { id: '1', name: 'admin' };
          return user;
        }
        return null;
      }
    })
  ],
  secret: process.env.SECRET,
  url: process.env.NEXTAUTH_URL,
  pages: {
    // signIn: '/login'
  }
};

// minimalize imports in other files
export const getAuth = () => getServerSession(authOptions);
