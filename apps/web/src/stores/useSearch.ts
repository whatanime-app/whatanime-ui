import { QueryClient } from '@tanstack/react-query';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { AnimesResource } from '@/services/http';
import { GetAnimeByTitleOnJikan } from '@/types/results';

type SearchStore = {
  results: GetAnimeByTitleOnJikan;
  searchAnime: (queryClient: QueryClient, title: string) => Promise<void>;
};

export const useSearch = create(
  persist<SearchStore>(
    (set) => ({
      results: [],
      searchAnime: async (queryClient: QueryClient, title: string) => {
        const results = await queryClient.fetchQuery({
          queryKey: ['anime', title],
          queryFn: async () => AnimesResource.getAnimesByTitleOnJikan(title),
        });
        set({ results });
      },
    }),
    {
      name: 'search-animes',
    },
  ),
);
