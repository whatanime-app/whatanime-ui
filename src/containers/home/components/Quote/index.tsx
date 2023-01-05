import { AiOutlineArrowRight } from 'react-icons/ai';

import { Button, Character, Content, Flex, Header, StyledText as Text, Title } from './styles';

export function Quote() {
  return (
    <Content>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an
      </Text>
      <Flex>
        <Header>
          <Character>Naruto Uzumaki</Character>
          <Title>Naruto</Title>
        </Header>
        <Button>
          <AiOutlineArrowRight size={32} />
        </Button>
      </Flex>
    </Content>
  );
}
