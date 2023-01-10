import type { ReactNode } from 'react';

import { Header } from '@whatanime/design-system';
import { Logo } from '../Logo';
import { Container, Content } from './styles';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}
