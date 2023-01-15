import { useCallback } from 'react';
import { Text } from '@whatanime/design-system';

import { useAnimeTop } from '@/hooks/useAnime';
import { useTrpcContext } from '@/hooks/useTrpcContext';
import type { TypeTopAnime } from '@/types/jikan';

import { Box, Container, Heading, Link, List, ListItem } from './styles';

type Props = {
  type: Extract<TypeTopAnime, 'airing' | 'favorite'>;
};

export function Ranking({ type }: Props) {
  const { getAnimeById } = useTrpcContext();
  const { data, isLoading } = useAnimeTop(type);

  const prefetchAnime = useCallback(
    async (malId: number) => {
      await getAnimeById.prefetch({ malId });
    },
    [getAnimeById],
  );

  if (isLoading || !data) {
    return (
      <Container css={{ padding: '$4' }}>
        <Text>is Loading...</Text>
      </Container>
    );
  }

  return (
    <Container css={{ height: type === 'airing' ? 250 : 548 }}>
      <Heading>
        <Text css={{ textTransform: 'uppercase' }} as="h2">
          {type}
        </Text>
      </Heading>
      <Box>
        <List>
          {data.map(({ malId, title }, index) => (
            <Link key={malId} href={`/${malId}`} onMouseOver={() => prefetchAnime(malId)}>
              <ListItem css={{ '-webkit-line-clamp': type === 'airing' ? 1 : 2 }}>
                {index + 1}.{` ${title}`}
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Container>
  );
}
