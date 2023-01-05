import { Layout } from '@/components/Layout';

import { AnimeBanner, Quote, Search } from './components';
import { Container } from './styles';

export function Home() {
  return (
    <Layout>
      <Container>
        <Search />
        <Quote />
      </Container>
      <Container>
        <AnimeBanner />
        <Quote />
      </Container>
      <Container>
        <AnimeBanner />
        <Quote />
      </Container>
    </Layout>
  );
}
