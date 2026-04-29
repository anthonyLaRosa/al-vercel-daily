import { BreakingNewsBanner } from "@repo/ui/molecules/breaking-news-banner";
import { cacheLife, cacheTag } from "next/cache";
import { getBreakingNewsServer } from "@/services/server-side/get-breaking-news";

export async function BreakingNewsNext() {
  "use cache";
  cacheTag("breaking-news");
  cacheLife("minutes");

  const response = await getBreakingNewsServer();
  if (!response.data) {
    return null;
  }
  return (
    <BreakingNewsBanner label="Breaking news">
      {response.data.headline}
    </BreakingNewsBanner>
  );
}
