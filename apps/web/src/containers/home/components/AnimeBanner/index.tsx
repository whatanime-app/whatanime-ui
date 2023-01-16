import { memo, useCallback, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { Button } from '@whatanime/design-system';
import Link from 'next/link';

import { useTrpcContext } from '@/hooks/useTrpcContext';
import type { AnimeResult } from '@/types/results';

import { Badge, Box, Container, Content, Flex, Header, Img, Text } from './styles';

type Props = Pick<AnimeResult, 'title' | 'image' | 'year' | 'score' | 'synopsis' | 'malId'>;

export const AnimeBanner = memo(({ title, image, year, score, synopsis, malId }: Props) => {
  const [isMobile, seIsMobile] = useState(true);
  const [compatibility] = useState(null); // implementar futuramente com quando tiver api de img
  const { getAnimeById } = useTrpcContext();

  const prefetchAnime = useCallback(async () => {
    await getAnimeById.prefetch({ malId });
  }, [malId, getAnimeById]);

  const { width } = useWindowSize();

  const verifyWidth = useCallback(() => {
    if (width > 720) {
      seIsMobile(false);
    } else {
      seIsMobile(true);
    }
  }, [width]);

  useEffect(() => {
    verifyWidth();
  }, [verifyWidth]);

  return (
    <Container>
      {!isMobile && (
        <Box>
          <Img width={220} height={250} src={image} alt={title} priority />
        </Box>
      )}
      <Content>
        <Flex css={{ alignItems: 'flex-start' }}>
          <Header>
            <Text css={{ '-webkit-line-clamp': 2 }} as="h2">
              {`${title} `}
              {year && <span>({year})</span>}
            </Text>
          </Header>
          <Flex css={{ alignItems: 'flex-start', gap: '$4' }}>
            {!isMobile && compatibility && (
              <Flex css={{ flexDirection: 'column' }}>
                <Badge>Compatibility</Badge>
                <Text>{compatibility}</Text>
              </Flex>
            )}
            {!isMobile && score && (
              <Flex css={{ flexDirection: 'column' }}>
                <Badge>Score</Badge>
                <Text>{score}</Text>
              </Flex>
            )}
            <Button as={Link} href={`/${malId}`} onMouseOver={prefetchAnime}>
              Go to Page
            </Button>
          </Flex>
        </Flex>
        {synopsis && (
          <>
            <Text as="span" css={{ fontWeight: 'bold', marginBottom: '$2' }}>
              Synopsys
            </Text>
            <Text>{synopsis}</Text>
          </>
        )}
      </Content>
    </Container>
  );
});

AnimeBanner.displayName = 'AnimeBanner';
