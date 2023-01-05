import { Button } from '@/components/Button';

import { Badge, Box, Container, Content, Flex, Header, Img, StyleText as Text } from './styles';

export function AnimeBanner() {
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
        <Img
          width={160}
          height={220}
          src="https://cdn.myanimelist.net/images/anime/1207/128768l.webp"
          alt="Naruto Uzumaki"
        />
      </Box>
      <Content>
        <Flex css={{ alignItems: 'flex-start' }}>
          <Header>
            <Text as="h2">
              Naruto <span>(2016)</span>
            </Text>
          </Header>
          <Flex css={{ flexDirection: 'column' }}>
            <Badge>Score</Badge>
            <Text>8.02</Text>
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
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
      </Content>
    </Container>
  );
}
