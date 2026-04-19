import { dailyQuery } from "@/helpers/dailyQuery";

export interface GetBreakingNewsResponse {
  id: string;
  headline: string;
  summary: string;
  articleId: string;
  category: string;
  publishedAt: string;
  urgent: boolean;
}
export function getBreakingNews() {
  return dailyQuery<GetBreakingNewsResponse>("/breaking-news");
}
