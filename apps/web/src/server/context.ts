import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';

import { AnimeChanResource, JikanResource } from '@/utils/http';
import { prisma } from '@/utils/prisma';

export async function createContext(ctx?: CreateNextContextOptions) {
  return {
    session: await getSession({ req: ctx?.req }),
    prisma,
    animesResource: new JikanResource(),
    quotesResource: new AnimeChanResource(),
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
