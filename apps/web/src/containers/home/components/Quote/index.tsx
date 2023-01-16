import { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

import { useQuoteRandom } from '@/hooks/useQuote';
import { useTrpcContext } from '@/hooks/useTrpcContext';

import { Button, Character, Content, Flex, Header, Text, Title } from './styles';

export function Quote() {
  const [malId, setMalId] = useState<number | null>(null);
  const { data, isLoading } = useQuoteRandom();

  const { getAnimeByTitle, getAnimeById } = useTrpcContext();

  const verifyMalId = useCallback(
    async (animeTitle: string | undefined) => {
      if (animeTitle !== undefined) {
        await getAnimeByTitle
          .fetch({ title: animeTitle })
          .then((response) => (response !== null ? setMalId(response.animeByTitle.malId) : setMalId(null)))
          .catch(() => setMalId(null));
      } else {
        setMalId(null);
      }
    },
    [getAnimeByTitle],
  );

  useEffect(() => {
    verifyMalId(data?.title);
  }, [data?.title, verifyMalId]);

  const prefetchAnime = useCallback(async () => {
    if (malId !== null) await getAnimeById.prefetch({ malId });
  }, [getAnimeById, malId]);

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
            onMouseOver={prefetchAnime}
          >
            <AiOutlineArrowRight size={32} />
          </Button>
        ) : null}
      </Flex>
    </Content>
  );
}
