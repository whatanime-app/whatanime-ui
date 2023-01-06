import create from 'zustand';
import { persist } from 'zustand/middleware';

import { AnimesResource } from '@/services/http';
import { AnimeResult } from '@/types/results';

type SearchStore = {
  results: AnimeResult[];
  searchAnime: (title: string) => Promise<void>;
};

export const useSearch = create(
  persist<SearchStore>(
    (set) => ({
      results: [],
      searchAnime: async (title: string) => {
        const results = await AnimesResource.getAnimesByTitleOnJikan(title);
        set({ results });
      },
    }),
    {
      name: 'search-animes',
    },
  ),
);
