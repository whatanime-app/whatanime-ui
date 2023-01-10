import type { ReactNode } from 'react';
import { Avatar } from '../Avatar';

import { Container, Content } from './styles';

type Props = {
  children: ReactNode;
};

export function Header({ children }: Props) {
  return (
    <Container>
      <Content>
        {children}
        <Avatar />
      </Content>
    </Container>
  );
}
