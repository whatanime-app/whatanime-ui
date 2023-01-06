import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetStaticProps } from 'next';

import { prefetchAnimeRandom, prefetchQuoteRandom } from '@/services/http';

import { Home } from '../containers/home';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await prefetchAnimeRandom(queryClient);
  await prefetchQuoteRandom(queryClient);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
