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
  const internalUrl = "/breaking-news";
  return dailyFetch<GetBreakingNewsResponse>(internalUrl);
}
