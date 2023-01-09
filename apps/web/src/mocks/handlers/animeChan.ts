import { rest } from 'msw';

import { ANIMECHAN_URL } from '@/services/http';
import type { QuoteResponse } from '@/types/animeChan';

import { quote, quotes } from '../animeChan';

export const handlers = [
  rest.get<QuoteResponse>(`${ANIMECHAN_URL}/random`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(quote));
  }),

  rest.get<QuoteResponse>(`${ANIMECHAN_URL}/random/anime`, (_, res, ctx) =>
    res(ctx.delay(150), ctx.status(200), ctx.json(quote)),
  ),

  rest.get<QuoteResponse>(`${ANIMECHAN_URL}/random/character`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(quote));
  }),

  rest.get<QuoteResponse[]>(`${ANIMECHAN_URL}/quotes`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(quotes));
  }),

  rest.get<QuoteResponse[]>(`${ANIMECHAN_URL}/quotes/anime`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(quotes));
  }),

  rest.get<QuoteResponse[]>(`${ANIMECHAN_URL}/quotes/character`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(quotes));
  }),
];
