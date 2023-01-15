import { QueryClient } from '@tanstack/react-query';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { AnimesResource } from '@/services/http';
import type { GetAnimeByTitleOnJikan } from '@/types/results';

type SearchStore = {
  response: GetAnimeByTitleOnJikan;
  searchAnime: (queryClient: QueryClient, title: string) => Promise<void>;
};

export const useSearch = create(
  persist<SearchStore>(
    (set) => ({
      response: null,
      searchAnime: async (queryClient: QueryClient, title: string) => {
        const response = await queryClient.fetchQuery({
          queryKey: ['anime', title],
          queryFn: async () => AnimesResource.getAnimesByTitleOnJikan(title),
        });
        set({ response });
      },
    }),
    { name: 'search-animes' },
  ),
);
