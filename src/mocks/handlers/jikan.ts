import { rest } from 'msw';

import type {
  AnimeByIdResponse,
  AnimeByNameResponse,
  AnimeRandomResponse,
  TopAnimeResponse,
} from '@/types/jikan';
import { JIKAN_URL } from '@/utils/index';

import { byMalId, byName, byRandom, byTop } from '../jikan';

export const handlers = [
  rest.get<AnimeByNameResponse>(`${JIKAN_URL}/anime`, (req, res, ctx) =>
    res(ctx.delay(150), ctx.status(200), ctx.json(byName)),
  ),

  rest.get<AnimeByIdResponse>(`${JIKAN_URL}/anime/:id`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(byMalId));
  }),

  rest.get<AnimeRandomResponse>(`${JIKAN_URL}/random/anime`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(byRandom));
  }),

  rest.get<TopAnimeResponse>(`${JIKAN_URL}/top/anime`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(byTop));
  }),
];
