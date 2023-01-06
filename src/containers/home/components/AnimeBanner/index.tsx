import { Button } from '@/components/Button';
import type { AnimeResult } from '@/types/results';

import { Badge, Box, Container, Content, Flex, Header, Img, StyleText as Text } from './styles';

type Props = {
  anime: AnimeResult;
};

export function AnimeBanner({ anime }: Props) {
  const { title, image, year, score, synopsis } = anime;

  return (
    <Container>
      <Box
        css={{
          width: 160,
          borderRadius: 6,
          overflow: 'hidden',
          boxShadow: `0 2px 10px $black`,
        }}
      >
        <Img width={160} height={220} src={image} alt={title} />
      </Box>
      <Content>
        <Flex css={{ alignItems: 'flex-start' }}>
          <Header>
            <Text as="h2">
              {title} <span>({year})</span>
            </Text>
          </Header>
          <Flex css={{ flexDirection: 'column' }}>
            <Badge>Score</Badge>
            <Text>{score}</Text>
          </Flex>
          <Flex css={{ flexDirection: 'column' }}>
            <Badge>Compatibility</Badge>
            <Text>80%</Text>
          </Flex>
          <Button>Go to Page</Button>
        </Flex>
        <Text as="span" css={{ fontWeight: 'bold', marginBottom: '$2' }}>
          Synopsys
        </Text>
        <Text>{synopsis}</Text>
      </Content>
    </Container>
  );
}
