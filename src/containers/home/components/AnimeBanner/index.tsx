import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { useAnime } from '@/hooks/useAnime';
import type { AnimeResult } from '@/types/results';
import { prefetchAnimeById } from '@/utils/prefetchAnime';

import { Badge, Box, Container, Content, Flex, Header, Img, StyleText as Text } from './styles';

type Props = {
  anime?: AnimeResult;
};

export function AnimeBanner({ anime }: Props) {
  const { data, isLoading } = useAnime(anime);

  const queryClient = useQueryClient();

  const compatility = null; // implementar futuramente com quando tiver api de img

  const prefetchAnime = useCallback(async (id: number) => prefetchAnimeById(queryClient, id), [queryClient]);

  if (!data || isLoading) {
    return (
      <Container>
        <Text>is Loading...</Text>
      </Container>
    );
  }

  const { title, image, year, score, synopsis, malId } = data;

  return (
    <Container>
      <Box>
        <Img width={220} height={250} src={image} alt={title} priority />
      </Box>
      <Content>
        <Flex css={{ alignItems: 'flex-start' }}>
          <Header>
            <Text as="h2">
              {title} <span>({year})</span>
            </Text>
          </Header>
          <Flex css={{ alignItems: 'flex-start', gap: '$4' }}>
            {compatility ? (
              <Flex css={{ flexDirection: 'column' }}>
                <Badge>Compatibility</Badge>
                <Text>{compatility}</Text>
              </Flex>
            ) : null}
            {score ? (
              <Flex css={{ flexDirection: 'column' }}>
                <Badge>Score</Badge>
                <Text>{score}</Text>
              </Flex>
            ) : null}
            <Button as={Link} href={`/${malId}`} onMouseOver={() => prefetchAnime(malId)}>
              Go to Page
            </Button>
          </Flex>
        </Flex>
        <Text as="span" css={{ fontWeight: 'bold', marginBottom: '$2' }}>
          Synopsys
        </Text>
        <Text>{synopsis}</Text>
      </Content>
    </Container>
  );
}
