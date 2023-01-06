import { useQuery } from '@tanstack/react-query';

import type { QuoteResult } from '@/types/results';
import { QuotesResource } from '@/utils/http';

export const useQuoteRandom = (quote: QuoteResult) =>
  useQuery({
    queryKey: ['quote-random'],
    queryFn: async () => QuotesResource.getRandomAnimeQuote(),
    staleTime: 2 * 60 * 1000, // 2 minutes
    initialData: quote,
  });
