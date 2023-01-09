import { useState } from "react";
import { useEffectOnce } from "react-use";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { globalStyles } from "@/styles/global";
import { axeAccessibilityReporter } from "../utils";

globalStyles();

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  useEffectOnce(() => {
    axeAccessibilityReporter();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>WhatAnime</title>
        </Head>
        <Component {...pageProps} />
        <Analytics />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}
