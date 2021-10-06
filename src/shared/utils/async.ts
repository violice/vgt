import { writable } from 'svelte/store';

type AsyncStore<T> = { isLoading: boolean; data: T | undefined; error: any };

type AsyncOptions = { initialData: any; keepPreviousData: boolean };

const async = <T>(
  requestFn: any,
  options: AsyncOptions = { initialData: undefined, keepPreviousData: false },
) => {
  const { set, update, subscribe } = writable<AsyncStore<T>>({
    isLoading: true,
    data: options.initialData,
    error: null,
  });

  const makeRequest = async (requestParams?: any) => {
    try {
      if (options.keepPreviousData) {
        update((asyncStore: AsyncStore<T>) => ({ ...asyncStore, isLoading: true, error: null }));
      } else {
        set({ isLoading: false, data: options.initialData, error: null });
      }

      const data = await requestFn(requestParams);

      set({ isLoading: false, data, error: null });
    } catch (error) {
      set({ isLoading: false, data: options.initialData, error });
    }
  };
  makeRequest();
  return { subscribe, refetch: makeRequest };
};

export default async;
