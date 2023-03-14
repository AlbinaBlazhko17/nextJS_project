import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Mytop - the best top</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;700&family=Sen:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </>;
}
