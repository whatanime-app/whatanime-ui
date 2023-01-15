import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { GetAnimeByTitleOnJikan } from '@/types/results';

type SearchStore = {
  response: GetAnimeByTitleOnJikan;
  setResponse: (data: GetAnimeByTitleOnJikan) => void;
};

export const useSearch = create(
  persist<SearchStore>(
    (set) => ({
      response: null,
      setResponse: (response: GetAnimeByTitleOnJikan) => set({ response }),
    }),
    { name: '@whatanime-search-animes' },
  ),
);
