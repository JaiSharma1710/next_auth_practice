import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || clientId.length === 0) {
    throw new Error('MISSING GOOGLE CLIENT ID');
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('MISSING GOOGLE CLIENT SECRET');
  }

  return {
    clientId,
    clientSecret,
  };
}

export const authOptions = {
  providers: [
    Google({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  secret: 'WYWiAbUyp2H2HwpTaXApIPPfXPlsZKsTz4o26zBjcJU=',
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url }) {
      // if (url === '/') {
      //   return '/';
      // }
      // return '/public';

      return '/';
    },
    async session({ session, user, token }) {
      // console.log("token", '<============user in session');

      session.jwt = token.jwt;
      session.isAdmin = token.isAdmin;
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // console.log(token, '<==============user in jwt');

      if (!token.jwt && account.id_token) {
        token.jwt = account.id_token;
      }

      if (token.email === 'sharmajai901@gmail.com') {
        token.isAdmin = true;
      } else {
        token.isAdmin = false;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
