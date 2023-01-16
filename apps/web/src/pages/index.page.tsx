import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import type { GetStaticProps } from 'next';

import { Home } from '@/containers/home';
import { createContext } from '@/server/context';
import { appRouter } from '@/server/routers/_app';

export const getStaticProps: GetStaticProps = async () => {
  const { dehydrate, getAnimeRandom, getRandomAnimeQuote, getAnimeRanking } = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext({ req: undefined, res: undefined }),
  });

  await getAnimeRandom.prefetch();
  await getRandomAnimeQuote.prefetch();
  await getAnimeRanking.prefetch({ filter: 'airing' });
  await getAnimeRanking.prefetch({ filter: 'favorite' });

  return {
    props: {
      trpcState: dehydrate(),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
