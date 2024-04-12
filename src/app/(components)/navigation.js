import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <header className='bg-gray-600 text-gray-100'>
      <nav className='flex justify-between items-center w-full px-10 py-4'>
        <Link href='/'>my site</Link>
        <div className='flex gap-10'>
          <Link href='/'>Home</Link>
          <Link href='/member'>member</Link>
          <Link href='/client-member'>client member</Link>
          <Link href='/admin'>admin</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
