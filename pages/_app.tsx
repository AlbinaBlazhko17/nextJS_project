import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Mytop - the best top</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      
    </Head>
    <Component {...pageProps} />
  </>;
}
