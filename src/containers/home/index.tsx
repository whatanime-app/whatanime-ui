import { useAnimeById, useAnimeRandom } from 'src/hooks/useAnime';

import { Layout } from '@/components/Layout';

import { AnimeBanner, Quote, Search } from './components';
import { Container } from './styles';

export function Home() {
  const { data: animeRandom } = useAnimeRandom();
  const { data: animeById } = useAnimeById(21);

  return (
    <Layout>
      <Container>
        <Search />
        <Quote />
      </Container>
      <Container>
        {animeRandom ? <AnimeBanner anime={animeRandom} /> : null}
        <Quote />
      </Container>
      <Container>
        {animeById ? <AnimeBanner anime={animeById} /> : null}
        <Quote />
      </Container>
    </Layout>
  );
}
