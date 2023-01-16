import { createNextApiHandler } from '@trpc/server/adapters/next';

import { createContext } from '@/server/context';
import { appRouter } from '@/server/routers/_app';

export default createNextApiHandler({
  router: appRouter,
  createContext,
  responseMeta({ ctx, paths, type, errors }) {
    const allPublic = paths && paths.every((path) => path.includes('public'));
    const allOk = errors.length === 0;
    const isQuery = type === 'query';
    if (ctx?.req && allPublic && allOk && isQuery) {
      const TWO_MINUTES_IN_SECONDS = 60 * 2;
      return {
        headers: {
          'cache-control': `s-maxage=1, stale-while-revalidate=${TWO_MINUTES_IN_SECONDS}`,
        },
      };
    }
    return {};
  },
});
