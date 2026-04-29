import { dailyFetch } from "../daily-fetch";

export interface GetBreakingNewsResponse {
  id: string;
  headline: string;
  summary: string;
  articleId: string;
  category: string;
  publishedAt: string;
  urgent: boolean;
}

export async function getBreakingNewsServer() {
  const baseUrl = "https://vercel-daily-news-api.vercel.app/api";
  const internalUrl = `${baseUrl}/breaking-news`;
  return dailyFetch<GetBreakingNewsResponse>(internalUrl);
}
