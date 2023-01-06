import { useQuery } from '@tanstack/react-query';

import type { AnimeResult } from '@/types/results';
import { AnimesResource } from '@/utils/http';

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

export const useAnimeTopByFavorite = () =>
  useQuery({
    queryKey: ['animes', 'favorite'],
    queryFn: async () => AnimesResource.getAnimeTop('favorite'),
  });

export const useAnimeTopByPopularity = () =>
  useQuery({
    queryKey: ['animes', 'popularity'],
    queryFn: async () => AnimesResource.getAnimeTop('bypopularity'),
  });
