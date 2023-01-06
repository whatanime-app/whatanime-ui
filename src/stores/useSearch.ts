import create from 'zustand';
import { persist } from 'zustand/middleware';

import { AnimeResult } from '@/types/results';
import { AnimesResource } from '@/utils/http';

type SearchStore = {
  animes: AnimeResult[];
  searchAnime: (title: string) => Promise<void>;
};

export const useSearch = create(
  persist<SearchStore>(
    (set) => ({
      animes: [],
      searchAnime: async (title: string) => {
        const animes = await AnimesResource.getAnimesByTitleOnJikan(title);
        set({ animes });
      },
    }),
    {
      name: 'search-animes',
    },
  ),
);
