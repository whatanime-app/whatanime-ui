import { publicProcedure, router } from '../trpc';

export const quotesRouter = router({
  getRandomAnimeQuote: publicProcedure.query(({ ctx }) => ctx.quotesResource.getRandomAnimeQuote()),
});
