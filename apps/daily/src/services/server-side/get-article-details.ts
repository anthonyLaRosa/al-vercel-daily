import { dailyFetch } from "../daily-fetch";
import type { Article } from "./get-list-articles";

export async function getArticleDetails(slug: string) {
  const baseUrl = "https://vercel-daily-news-api.vercel.app/api";
  const internalUrl = `${baseUrl}/articles/${slug}`;
  return dailyFetch<Article>(internalUrl);
}
