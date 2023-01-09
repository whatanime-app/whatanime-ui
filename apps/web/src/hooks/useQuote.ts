import { useQuery } from '@tanstack/react-query';

import { QuotesResource } from '@/services/http';

export const useQuoteRandom = () =>
  useQuery({
    queryKey: ['quote', 'q-random'],
    queryFn: async () => QuotesResource.getRandomAnimeQuote(),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
