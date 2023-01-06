import { useEffect, useState } from 'react';
import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { useAnimeRandom } from '@/hooks/useAnime';
import { useSearch } from '@/stores/useSearch';
import type { AnimeResult } from '@/types/results';

import { AnimeBanner, Quote, Search } from './components';
import { Box, Container, Heading } from './styles';

export function Home() {
  const [animesByTitle, setAnimeByTitle] = useState<AnimeResult[]>([]);
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
          {animeRandom ? <AnimeBanner anime={animeRandom} /> : null}
        </Box>
        <Quote />
      </Container>
      {animesByTitle.length > 0 ? (
        <Container>
          <Box>
            <Heading size="5xl" as="h1">
              RESULTS
            </Heading>
            {animesByTitle[0] ? <AnimeBanner anime={animesByTitle[0]} /> : null}
          </Box>
          <Quote />
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
