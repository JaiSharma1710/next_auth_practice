'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home = () => {
  const handleLogin = () => signIn('google');

  const handleLogout = () => signOut({ callbackUrl: '/' });

  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className='w-full h-[93vh] flex justify-center items-center'>
        <button className='bg-gray-600 px-10 py-2 rounded'>
          loading.......
        </button>
      </div>
    );
  }

  return (
    <div className='w-full h-[93vh] flex justify-center items-center'>
      {status !== 'authenticated' ? (
        <button
          onClick={handleLogin}
          className='bg-gray-600 px-10 py-2 rounded'
        >
          login google
        </button>
      ) : (
        <button
          onClick={handleLogout}
          className='bg-gray-600 px-10 py-2 rounded'
        >
          logout google
        </button>
      )}
    </div>
  );
};

export default Home;
