import { trpc } from '@/utils/trpc';

export const useQuoteRandom = () =>
  trpc.getRandomAnimeQuote.useQuery(undefined, {
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
