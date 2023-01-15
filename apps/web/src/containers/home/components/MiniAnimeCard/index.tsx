import { memo, useCallback } from 'react';
import Link from 'next/link';

import { useTrpcContext } from '@/hooks/useTrpcContext';
import type { AnimeResult } from '@/types/results';

import { Button, Container, Span } from './styles';

type Props = Pick<AnimeResult, 'title' | 'malId' | 'image'>;

export const MiniAnimeCard = memo(({ image, malId, title }: Props) => {
  const { getAnimeById } = useTrpcContext();

  const prefetchAnime = useCallback(async () => {
    await getAnimeById.prefetch({ malId });
  }, [getAnimeById, malId]);

  return (
    <Container css={{ backgroundImage: `url(${image})` }}>
      <Button as={Link} href={`/${malId}`} onMouseOver={prefetchAnime}>
        <Span>{title}</Span>
      </Button>
    </Container>
  );
});

MiniAnimeCard.displayName = 'MiniAnimeCard';
