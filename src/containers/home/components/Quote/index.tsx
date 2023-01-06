import { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';

import { useQuoteRandom } from '@/hooks/useQuote';
import { AnimesResource, prefetchAnimeById } from '@/services/http';

import { Button, Character, Content, Flex, Header, StyledText as Text, Title } from './styles';

export function Quote() {
  const [malId, setMalId] = useState<number | null>(null);
  const { data, isLoading } = useQuoteRandom();
  const queryClient = useQueryClient();

  useEffect(() => {
    const verifyMalId = async (title: string | undefined) => {
      if (title !== undefined) {
        const response = await AnimesResource.getAnimesByTitleOnJikan(title);
        setMalId(response[0].malId);
      } else {
        setMalId(null);
      }
    };
    verifyMalId(data?.title);
  }, [data?.title]);

  const prefetchAnime = useCallback(async () => {
    if (malId !== null) prefetchAnimeById(queryClient, malId);
  }, [queryClient, malId]);

  if (isLoading || !data) {
    return (
      <Content>
        <Text>is Loading...</Text>
      </Content>
    );
  }

  const { character, title, quote } = data;

  return (
    <Content>
      <Text>{quote}</Text>
      <Flex>
        <Header>
          <Character>{character}</Character>
          <Title>{title}</Title>
        </Header>
        {malId ? (
          <Button
            aria-label={`link to ${title} page`}
            as={Link}
            href={`/${malId}`}
            onMouseOver={() => prefetchAnime()}
          >
            <AiOutlineArrowRight size={32} />
          </Button>
        ) : null}
      </Flex>
    </Content>
  );
}
