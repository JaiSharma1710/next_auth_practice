'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

const ClientMember = () => {
  const { data: session } = useSession();

  if (!session) {
    return 'not session';
  }

  return <div>hello {session.user?.name}</div>;
};

export default ClientMember;
