import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';

import { AnimeChanResource, JikanResource } from '@/utils/http';
import { prisma } from '@/utils/prisma';

type ContextOptions = Partial<CreateNextContextOptions>;

export const createContext = async ({ req = undefined, res = undefined }: ContextOptions) => ({
  req,
  res,
  prisma,
  session: await getSession({ req }),
  animesResource: new JikanResource(),
  quotesResource: new AnimeChanResource(),
});

export type Context = inferAsyncReturnType<typeof createContext>;
