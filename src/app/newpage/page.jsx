// app/page.js or app/somepage/page.js
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className=' flex justify-between  mx-10 py-3'>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn('twitter')}>Sign in with X</button>
    </div>
  );
}
