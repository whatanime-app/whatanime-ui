import { useQuery } from '@tanstack/react-query';

import { Layout } from '@/components/Layout';
import { AnimesResource } from '@/utils/http';

import { AnimeBanner, Quote, Search } from './components';
import { Container } from './styles';

export function Home() {
  const query = useQuery({
    queryKey: ['anime-quote'],
    queryFn: async () => {
      const response = await AnimesResource.getAnimeRandom();
      return response;
    },
  });

  // eslint-disable-next-line no-console
  console.log(query);

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
