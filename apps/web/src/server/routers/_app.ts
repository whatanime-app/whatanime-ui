import { mergeRouters } from '../trpc';

import { animesRouter } from './animes';
import { quotesRouter } from './quotes';

export const appRouter = mergeRouters(animesRouter, quotesRouter);

export type AppRouter = typeof appRouter;
