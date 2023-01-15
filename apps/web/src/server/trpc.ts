import { initTRPC, TRPCError } from '@trpc/server';

import type { Context } from './context';

const t = initTRPC.context<Context>().create();

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.session?.user?.email) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Not authorized',
    });
  }
  return next({
    ctx: {
      session: ctx.session,
    },
  });
});

export const { middleware, router, mergeRouters } = t;

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
