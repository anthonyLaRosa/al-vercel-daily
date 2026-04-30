import { cacheLife, cacheTag } from "next/cache";
import { dailyFetch } from "../daily-fetch";
import type { Article } from "./get-list-articles";

export async function getArticleDetails(slug: string) {
  "use cache: remote";

  cacheTag("article-page", `article-page-${slug}`);
  cacheLife("hours");

  const internalUrl = `/articles/${slug}`;
  return dailyFetch<Article>(internalUrl);
}
