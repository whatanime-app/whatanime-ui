import { useEffect, useState } from 'react';
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
  const results = useSearch((state) => state.results);
  const [animesByTitle, setAnimesByTitle] = useState<GetAnimeByTitleOnJikan>([]);

  const { data: animeRandom } = useAnimeRandom();

  useEffect(() => {
    setAnimesByTitle(results);
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

      <Container>
        <Box>
          <Flex>
            <Flex css={{ flexDirection: 'column' }}>
              {animesByTitle.length > 0 ? (
                <>
                  <Heading size="5xl" as="h1">
                    RESULTS
                  </Heading>
                  <Flex>
                    <Flex css={{ flexDirection: 'column', gap: '$12', position: 'relative', height: 548 }}>
                      {animesByTitle[0].animes ? <AnimeBanner anime={animesByTitle[0].animes[0]} /> : null}
                      <Flex css={{ gap: '$2', justifyContent: 'space-between' }}>
                        {animesByTitle[0].animes
                          ? animesByTitle[pagination].animes.map((anime) => (
                              <MiniAnimeCard key={anime.malId} anime={anime} />
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
                        {animesByTitle.map(({ page }) => (
                          <Button
                            css={{ minWidth: 20 }}
                            key={page}
                            type="button"
                            onClick={() => setPagination(page)}
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
