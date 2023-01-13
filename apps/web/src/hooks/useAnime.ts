import { useQuery } from '@tanstack/react-query';

import { AnimesResource } from '@/services/http';
import type { TypeTopAnime } from '@/types/jikan';
import type { AnimeResult } from '@/types/results';

export const useAnimeRandom = () =>
  useQuery({
    queryKey: ['anime', 'a-random'],
    queryFn: async () => AnimesResource.getAnimeRandom(),
    staleTime: 60 * 60 * 1000 * 24, // 24 hours
  });

export const useAnimeById = (malId: number, anime?: AnimeResult) =>
  useQuery({
    queryKey: ['anime', malId],
    queryFn: async () => AnimesResource.getAnimeByIdOnJikan(malId),
    initialData: anime,
  });

export const useAnimeByTitle = (title: string) =>
  useQuery({
    queryKey: ['animes', title],
    queryFn: async () => AnimesResource.getAnimesByTitleOnJikan(title),
  });

export const useAnimeTop = (filter: TypeTopAnime) =>
  useQuery({
    queryKey: ['animes', filter],
    queryFn: async () => AnimesResource.getAnimeTop(filter),
  });
