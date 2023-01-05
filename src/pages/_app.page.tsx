import { useEffectOnce } from 'react-use';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { globalStyles } from '../styles/global';
import { axeAccessibilityReporter } from '../utils/axeAccessibilityReporter';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  useEffectOnce(() => {
    axeAccessibilityReporter();
  });

  return (
    <>
      <Head>
        <title>WhatAnime</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
