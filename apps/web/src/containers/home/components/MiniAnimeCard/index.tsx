import { memo, useCallback } from 'react';
import Link from 'next/link';

import { useTrpcContext } from '@/hooks/useTrpcContext';
import type { AnimeResult } from '@/types/results';

import { Button, Container, Span } from './styles';

type Props = Pick<AnimeResult, 'title' | 'malId' | 'image'> & { isMobile: boolean };

export const MiniAnimeCard = memo(({ image, malId, title, isMobile = true }: Props) => {
  const { getAnimeById } = useTrpcContext();

  const prefetchAnime = useCallback(async () => {
    await getAnimeById.prefetch({ malId });
  }, [getAnimeById, malId]);

  return (
    <Container css={{ backgroundImage: `url(${image})`, width: isMobile ? 168 : 216 }}>
      <Button as={Link} href={`/${malId}`} onMouseOver={prefetchAnime}>
        <Span>{title}</Span>
      </Button>
    </Container>
  );
});

MiniAnimeCard.displayName = 'MiniAnimeCard';
