import { trpc } from '@/utils/trpc';

export function useTrpcContext() {
  return trpc.useContext();
}

export type UseTrpcContext = typeof useTrpcContext;
