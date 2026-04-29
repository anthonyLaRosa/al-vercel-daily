import { dailyFetch } from "../daily-fetch";
import type { Article } from "./get-list-articles";

export async function getTrendingServer(exclude: string[]) {
  const internalUrl = "/articles/trending";
  return dailyFetch<Article[]>(internalUrl, {
    params: {
      exclude: exclude?.join(","),
    },
  });
}
