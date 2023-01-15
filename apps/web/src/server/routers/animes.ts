import { z } from 'zod';

import { publicProcedure, router } from '../trpc';

export const animesRouter = router({
  getAnimeById: publicProcedure
    .input(
      z.object({
        malId: z.number(),
      }),
    )
    .query(({ input, ctx }) => ctx.animesResource.getAnimeByIdOnJikan(input.malId)),
  getAnimeByTitle: publicProcedure
    .input(
      z.object({
        title: z.string(),
      }),
    )
    .query(({ input, ctx }) => ctx.animesResource.getAnimesByTitleOnJikan(input.title)),
  getAnimeRanking: publicProcedure
    .input(
      z.object({
        filter: z.enum(['airing', 'upcoming', 'bypopularity', 'favorite']),
      }),
    )
    .query(({ input, ctx }) => ctx.animesResource.getAnimeTop(input.filter)),
  getAnimeRandom: publicProcedure.query(({ ctx }) => ctx.animesResource.getAnimeRandom()),
});
