import { Avatar } from '@whatanime/design-system';

import { Logo } from '../Logo';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <Avatar
          src="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/10/narutofeliz-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1"
          alt="Naruto Uzumaki"
          fallback="NU"
        />
      </Content>
    </Container>
  );
}
