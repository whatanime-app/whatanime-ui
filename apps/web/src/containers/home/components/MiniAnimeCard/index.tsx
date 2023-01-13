import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';

import { prefetchAnimeById } from '@/services/http';
import type { AnimeResult } from '@/types/results';

import { Button, Container, Span } from './styles';

type Props = {
  anime: AnimeResult;
};

export function MiniAnimeCard({ anime }: Props) {
  const { image, title, malId } = anime;
  const queryClient = useQueryClient();

  const prefetchAnime = useCallback(async () => {
    await prefetchAnimeById(queryClient, malId);
  }, [queryClient, malId]);

  return (
    <Container css={{ backgroundImage: `url(${image})` }}>
      <Button as={Link} href={`/${malId}`} onMouseOver={() => prefetchAnime()}>
        <Span>{title}</Span>
      </Button>
    </Container>
  );
}
