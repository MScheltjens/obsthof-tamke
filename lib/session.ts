import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: {
  user: { username: string };
  expires: Date;
}) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256']
    });
    return payload;
  } catch (error) {
    console.log('Failed to verify session', error);
  }
}

// CREATE SESSION
export async function createSession(user: { username: string }) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ user, expires });
  (await cookies()).set('session', session, {
    httpOnly: true,
    secure: true,
    expires,
    sameSite: 'lax',
    path: '/'
  });
}

// GET SESSION
export async function getSession() {
  const session = (await cookies()).get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}

// UPDATE SESSION
export async function updateSession() {
  const session = (await cookies()).get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires,
    sameSite: 'lax',
    path: '/'
  });
}

// DELETE SESSION
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
