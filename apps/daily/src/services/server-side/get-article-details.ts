import { cacheLife, cacheTag } from "next/cache";
import { dailyFetch } from "../daily-fetch";
import type { Article } from "./get-list-articles";

export async function getArticleDetails(slug: string) {
  "use cache";

  cacheTag("article-page", `article-page-${slug}`);
  cacheLife("hours");

  const baseUrl = "https://vercel-daily-news-api.vercel.app/api";
  const internalUrl = `${baseUrl}/articles/${slug}`;
  return dailyFetch<Article>(internalUrl);
}
