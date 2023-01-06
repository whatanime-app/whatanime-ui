import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';

import { AnimesResource, QuotesResource } from '@/utils/http';

import { Home } from '../containers/home';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['anime-random'], async () => AnimesResource.getAnimeRandom());
  await queryClient.prefetchQuery(['quote-random'], async () => QuotesResource.getRandomAnimeQuote());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
