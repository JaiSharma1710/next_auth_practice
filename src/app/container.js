'use client';
import { SessionProvider } from 'next-auth/react';

export default function App({ children, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>{children}</SessionProvider>
  );
}
