import { useQuery } from '@tanstack/react-query';

import type { AnimeResult } from '@/types/results';
import { AnimesResource } from '@/utils/http';

export const useAnimeRandom = (anime?: AnimeResult) =>
  useQuery({
    queryKey: ['anime-random'],
    queryFn: async () => AnimesResource.getAnimeRandom(),
    cacheTime: 60 * 60 * 1000 * 24, // 24 hours
    initialData: anime,
  });

export const useAnimeById = (malId: number, anime?: AnimeResult) =>
  useQuery({
    queryKey: [`anime-id-${malId}`],
    queryFn: async () => AnimesResource.getAnimeByIdOnJikan(malId),
    initialData: anime,
  });

export const useAnimeByTitle = (title: string, animes?: AnimeResult[]) =>
  useQuery({
    queryKey: [`anime-title-${title}`],
    queryFn: async () => AnimesResource.getAnimesByTitleOnJikan(title),
    initialData: animes,
  });

export const useAnimeTopByFavorite = (animes?: AnimeResult[]) =>
  useQuery({
    queryKey: ['anime-favorite'],
    queryFn: async () => AnimesResource.getAnimeTop('favorite'),
    initialData: animes,
  });

export const useAnimeTopByPopularity = (animes?: AnimeResult[]) =>
  useQuery({
    queryKey: ['anime-popularity'],
    queryFn: async () => AnimesResource.getAnimeTop('bypopularity'),
    initialData: animes,
  });
