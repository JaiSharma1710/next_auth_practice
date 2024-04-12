import Navigation from './(components)/navigation';
import App from './container';
import './globals.css';

export default function RootLayout({ children, ...rest }) {
  return (
    <html lang='en'>
      <body className='bg-gray-100'>
        <App pageProps={rest}>
          <Navigation />
          {children}
        </App>
      </body>
    </html>
  );
}
