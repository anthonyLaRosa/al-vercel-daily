import { dailyQuery } from "@/helpers/dailyQuery";
import type { Article } from "../server-side/get-list-articles";

export function getTrending(exclude?: string[]) {
  const internalUrl = "/articles/trending";
  return dailyQuery<Article[]>(internalUrl, {
    params: {
      exclude: exclude?.join(","),
    },
  });
}
