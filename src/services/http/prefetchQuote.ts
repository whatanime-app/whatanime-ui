import { QueryClient } from '@tanstack/react-query';

import { QuotesResource } from './animeChanResource';

export const prefetchQuoteRandom = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ['quote', 'q-random'],
    queryFn: async () => QuotesResource.getRandomAnimeQuote(),
  });
};
