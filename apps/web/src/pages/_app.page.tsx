import { useEffectOnce } from 'react-use';
import { Nova_Mono as NovaMono, Roboto } from '@next/font/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import { globalStyles } from '@/styles/global';
import { axeAccessibilityReporter } from '@/utils';
import { trpc } from '@/utils/trpc';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const novaMono = NovaMono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace'],
});

globalStyles();

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffectOnce(() => {
    axeAccessibilityReporter();
  });

  return (
    <SessionProvider session={session}>
      <Head>
        <title>WhatAnime</title>
        <style jsx global>
          {`
            :root {
              --fonts-default: ${roboto.style.fontFamily};
              --fonts-code: ${novaMono.style.fontFamily};
            }
          `}
        </style>
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <ReactQueryDevtools />
    </SessionProvider>
  );
}

export default trpc.withTRPC(MyApp);
