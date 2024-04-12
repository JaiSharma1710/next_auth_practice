import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';

const Admin = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.isAdmin) {
    redirect('/denied');
  }

  return <div>hello admin</div>;
};

export default Admin;
