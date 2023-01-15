import { useCallback, useEffect, useState } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { Button } from '@whatanime/design-system';
import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { useAnimeRandom } from '@/hooks/useAnime';
import { prefetchAnimeRandom, prefetchQuoteRandom, prefetchTopAnime } from '@/services/http';
import { useSearch } from '@/stores/useSearch';
import type { GetAnimeByTitleOnJikan } from '@/types/results';

import { AnimeBanner, MiniAnimeCard, Quote, Ranking, Search } from './components';
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
  const [pagination, setPagination] = useState(0);
  const response = useSearch((state) => state.response);
  const [result, setResult] = useState<GetAnimeByTitleOnJikan>(null);

  const { data: animeRandom } = useAnimeRandom();

  useEffect(() => {
    setResult(response);
    setPagination(0);
  }, [response]);

  const setPage = useCallback((page: number) => {
    setPagination(page);
  }, []);

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
            {animeRandom ? <AnimeBanner {...animeRandom} /> : null}
            <Ranking type="airing" />
          </Flex>
        </Box>
      </Container>

      <Container>
        <Box>
          <Flex>
            <Flex css={{ flexDirection: 'column' }}>
              {result ? (
                <>
                  <Heading size="5xl" as="h1">
                    RESULTS
                  </Heading>
                  <Flex>
                    <Flex css={{ flexDirection: 'column', gap: '$12', position: 'relative', height: 548 }}>
                      {result.animeByTitle ? <AnimeBanner {...result.animeByTitle} /> : null}
                      <Flex css={{ gap: '$2', justifyContent: 'space-between' }}>
                        {result.data
                          ? result.data[pagination].animes.map((anime) => (
                              <MiniAnimeCard key={anime.malId} {...anime} />
                            ))
                          : null}
                      </Flex>
                      <Flex
                        css={{
                          gap: '$3',
                          position: 'absolute',
                          right: 0,
                          bottom: '-$16',
                          width: 'max-content',
                        }}
                      >
                        {result.data.map(({ page }) => (
                          <Button
                            css={{ minWidth: 20 }}
                            key={page}
                            type="button"
                            disabled={page === pagination}
                            onClick={() => setPage(page)}
                          >
                            {page + 1}
                          </Button>
                        ))}
                      </Flex>
                    </Flex>
                    <Ranking type="favorite" />
                  </Flex>
                </>
              ) : (
                <>
                  <Heading size="5xl" as="h1">
                    RESULTS
                  </Heading>
                  <Flex>
                    <Box />
                    <Ranking type="favorite" />
                  </Flex>
                </>
              )}
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Layout>
  );
}
