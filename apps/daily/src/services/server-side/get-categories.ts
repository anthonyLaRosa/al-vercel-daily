import { dailyFetch } from "../daily-fetch";

export interface Category {
  slug: string;
  name: string;
  articleCount: number;
}

export async function getCategories() {
  "use cache";
  const baseUrl = "https://vercel-daily-news-api.vercel.app/api";
  const internalUrl = `${baseUrl}/categories`;
  return dailyFetch<Category[]>(internalUrl);
}
