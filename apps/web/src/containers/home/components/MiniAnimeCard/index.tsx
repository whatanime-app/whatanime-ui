import { memo, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';

import { prefetchAnimeById } from '@/services/http';
import type { AnimeResult } from '@/types/results';

import { Button, Container, Span } from './styles';

type Props = Pick<AnimeResult, 'title' | 'malId' | 'image'>;

export const MiniAnimeCard = memo(({ image, malId, title }: Props) => {
  const queryClient = useQueryClient();

  const prefetchAnime = useCallback(async () => {
    await prefetchAnimeById(queryClient, malId);
  }, [queryClient, malId]);

  return (
    <Container css={{ backgroundImage: `url(${image})` }}>
      <Button as={Link} href={`/${malId}`} onMouseOver={prefetchAnime}>
        <Span>{title}</Span>
      </Button>
    </Container>
  );
});

MiniAnimeCard.displayName = 'MiniAnimeCard';
