import {
  type UndefinedInitialDataOptions,
  useQuery,
} from "@tanstack/react-query";
import {
  type DailyFetchParams,
  type DailyFetchResponse,
  dailyFetch,
} from "@/services/daily-fetch";

export interface DailyQueryOptions<T>
  extends Omit<
    UndefinedInitialDataOptions<DailyFetchResponse<T>>,
    "queryFn" | "queryKey"
  > {
  params?: DailyFetchParams;
  queryKey?: string[];
}

export const dailyQuery = <T>(url: string, options?: DailyQueryOptions<T>) => {
  const baseUrl = "/vercel-api";
  const internalUrl = `${baseUrl}${url}`;
  return useQuery<DailyFetchResponse<T>>({
    ...options,
    queryKey: [internalUrl],
    queryFn: async () => {
      const response = await dailyFetch<T>(internalUrl, {
        params: options?.params,
      });
      return response;
    },
  });
};
