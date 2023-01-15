import type { TypeTopAnime } from '@/types/jikan';
import type { AnimeResult } from '@/types/results';
import { trpc } from '@/utils/trpc';

export const useAnimeRandom = () =>
  trpc.getAnimeRandom.useQuery(undefined, {
    staleTime: 60 * 60 * 1000 * 24, // 24 hours
  });

export const useAnimeById = (malId: number, anime?: AnimeResult) =>
  trpc.getAnimeById.useQuery(
    { malId },
    {
      initialData: anime,
    },
  );

export const useAnimeByTitle = (title: string) => trpc.getAnimeByTitle.useQuery({ title });

export const useAnimeTop = (filter: TypeTopAnime) =>
  trpc.getAnimeRanking.useQuery(
    { filter },
    {
      staleTime: 60 * 60 * 1000 * 24, // 24 hours
    },
  );
