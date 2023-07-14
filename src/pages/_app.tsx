import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  
  <>
      <Component {...pageProps} />
      <Analytics />
    </>
);

export default MyApp;
