import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';

const Member = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/denied');
  }

  return <div>hello {session.user?.name}</div>;
};

export default Member;
