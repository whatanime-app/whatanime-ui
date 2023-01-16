import { Quote } from '../Quote';
import { Ranking } from '../Ranking';

import { Container, Flex } from './styles';

export function Aside() {
  return (
    <Container>
      <Quote />
      <Flex>
        <Ranking type="airing" />
        <Ranking type="favorite" />
      </Flex>
    </Container>
  );
}

export type AsideProps = HTMLDivElement;
