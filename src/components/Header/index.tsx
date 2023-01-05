import { Avatar } from '../Avatar';
import { Logo } from '../Logo';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <Avatar />
      </Content>
    </Container>
  );
}
