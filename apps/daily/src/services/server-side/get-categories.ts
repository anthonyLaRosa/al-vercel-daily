import { cacheLife, cacheTag } from "next/cache";
import { CacheTag } from "../cache-tags";
import { dailyFetch } from "../daily-fetch";

export interface Category {
  slug: string;
  name: string;
  articleCount: number;
}

export async function getCategories() {
  "use cache";
  cacheLife("hours");
  cacheTag(CacheTag.Categories);

  const internalUrl = "/categories";
  return dailyFetch<Category[]>(internalUrl);
}
