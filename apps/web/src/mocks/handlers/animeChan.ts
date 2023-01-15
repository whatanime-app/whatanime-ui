import { rest } from 'msw';

import type { QuoteResponse } from '@/types/animeChan';
import { ANIMECHAN_URL } from '@/utils/http';

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

  rest.get<Array<QuoteResponse>>(`${ANIMECHAN_URL}/quotes`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(quotes));
  }),

  rest.get<Array<QuoteResponse>>(`${ANIMECHAN_URL}/quotes/anime`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(quotes));
  }),

  rest.get<Array<QuoteResponse>>(`${ANIMECHAN_URL}/quotes/character`, (_, res, ctx) => {
    res(ctx.delay(150), ctx.status(200), ctx.json(quotes));
  }),
];
