import { AiOutlineArrowRight } from 'react-icons/ai';
import { useQuoteRandom } from 'src/hooks/useQuote';

import { Button, Character, Content, Flex, Header, StyledText as Text, Title } from './styles';

export function Quote() {
  const { data } = useQuoteRandom();

  if (!data) {
    return null;
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
        <Button>
          <AiOutlineArrowRight size={32} />
        </Button>
      </Flex>
    </Content>
  );
}
