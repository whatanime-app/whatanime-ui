import type { ReactNode } from 'react';

import { Header } from '../Header';

import { Container, Content } from './styles';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}
