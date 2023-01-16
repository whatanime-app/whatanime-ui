import { useCallback, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { Button } from '@whatanime/design-system';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { useAnimeRandom } from '@/hooks/useAnime';
import { useSearch } from '@/stores/useSearch';
import type { GetAnimeByTitleOnJikan } from '@/types/results';

import { AnimeBanner, MiniAnimeCard, Search } from './components';
import { Box, Container, Content, Flex, Heading } from './styles';

const Aside = dynamic<Record<string, never>>(() => import('./components/Aside').then((mod) => mod.Aside));

export function Home() {
  const [isMobile, seIsMobile] = useState(true);
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

  const { width } = useWindowSize();

  const verifyWidth = useCallback(() => {
    if (width > 960) {
      seIsMobile(false);
    } else {
      seIsMobile(true);
    }
  }, [width]);

  useEffect(() => {
    verifyWidth();
  }, [verifyWidth]);

  return (
    <Layout>
      <Head>
        <title>WhatAnime </title>
      </Head>
      <Container css={{ width: isMobile ? '90%' : '100%' }}>
        <Content>
          <Search />
          <Box>
            <Heading size="5xl" as="h1">
              ANIME OF THE DAY
            </Heading>
            {animeRandom ? <AnimeBanner {...animeRandom} /> : null}
          </Box>
          <Flex css={{ gap: '$2', flexDirection: 'column' }}>
            {result && (
              <>
                <Heading size="5xl" as="h2">
                  RESULTS
                </Heading>
                <Flex>
                  <Flex
                    css={{
                      flexDirection: 'column',
                      gap: '$8',
                    }}
                  >
                    {result.animeByTitle ? <AnimeBanner {...result.animeByTitle} /> : null}
                    <Flex
                      css={{
                        gap: '$2',
                        justifyContent: width < 720 ? 'center' : 'space-between',
                        flexWrap: 'wrap',
                      }}
                    >
                      {result.data &&
                        result.data[pagination].animes.map((anime) => (
                          <MiniAnimeCard isMobile={isMobile} key={anime.malId} {...anime} />
                        ))}
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  css={{
                    gap: '$2',
                    bg: '$white',
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
              </>
            )}
          </Flex>
        </Content>
        {!isMobile && <Aside />}
      </Container>
    </Layout>
  );
}
