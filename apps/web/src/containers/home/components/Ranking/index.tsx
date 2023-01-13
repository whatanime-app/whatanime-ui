import { useQueryClient } from '@tanstack/react-query';
import { Text } from '@whatanime/design-system';

import { useAnimeTop } from '@/hooks/useAnime';
import { prefetchAnimeById } from '@/services/http';
import type { TypeTopAnime } from '@/types/jikan';

import { Box, Container, Heading, Link, List, ListItem } from './styles';

type Props = {
  type: Extract<TypeTopAnime, 'airing' | 'favorite'>;
};

export function Ranking({ type }: Props) {
  const queryClient = useQueryClient();
  const { data, isLoading } = useAnimeTop(type);

  if (isLoading || !data) {
    return (
      <Container>
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
          {data
            ? data.map(({ malId, title }, index) => (
                <Link
                  key={malId}
                  href={`/${malId}`}
                  onMouseOver={() => prefetchAnimeById(queryClient, malId)}
                >
                  <ListItem css={{ '-webkit-line-clamp': type === 'airing' ? 1 : 2 }}>
                    {index + 1}.{` ${title}`}
                  </ListItem>
                </Link>
              ))
            : null}
        </List>
      </Box>
    </Container>
  );
}