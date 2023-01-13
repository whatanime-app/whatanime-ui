import { useEffect, useState } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { useAnimeRandom } from '@/hooks/useAnime';
import { prefetchAnimeRandom, prefetchQuoteRandom, prefetchTopAnime } from '@/services/http';
import { useSearch } from '@/stores/useSearch';
import type { AnimeResult } from '@/types/results';

import { AnimeBanner, Quote, Ranking, Search } from './components';
import { Box, Container, Flex, Heading } from './styles';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await prefetchAnimeRandom(queryClient);
  await prefetchQuoteRandom(queryClient);
  await prefetchTopAnime(queryClient, 'airing');
  await prefetchTopAnime(queryClient, 'favorite');

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default function Home() {
  const [animesByTitle, setAnimeByTitle] = useState<Array<AnimeResult>>([]);
  const { data: animeRandom } = useAnimeRandom();
  const results = useSearch((state) => state.results);

  useEffect(() => {
    setAnimeByTitle(results);
  }, [results]);

  return (
    <Layout>
      <Head>
        <title>WhatAnime{animeRandom ? ` | ${animeRandom.title}` : null} </title>
      </Head>
      <Container>
        <Search />
        <Quote />
      </Container>
      <Container>
        <Box>
          <Heading size="5xl" as="h1">
            ANIME OF THE DAY
          </Heading>
          <Flex>
            {animeRandom ? <AnimeBanner anime={animeRandom} /> : null}
            <Ranking type="airing" />
          </Flex>
        </Box>
      </Container>
      {animesByTitle.length > 0 ? (
        <Container>
          <Box>
            <Heading size="5xl" as="h1">
              RESULTS
            </Heading>
            <Flex>
              {animesByTitle[0] ? <AnimeBanner anime={animesByTitle[0]} /> : null}
              <Ranking type="favorite" />
            </Flex>
          </Box>
        </Container>
      ) : null}
      <pre>
        {animesByTitle.length > 0
          ? JSON.stringify(
              animesByTitle.map((anime) => anime.title),
              null,
              2,
            )
          : null}
      </pre>
    </Layout>
  );
}
