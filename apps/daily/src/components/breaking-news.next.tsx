"use client";

import { Skeleton } from "@repo/ui/atoms/skeleton";
import { BreakingNewsBanner } from "@repo/ui/molecules/breaking-news-banner";

import { getBreakingNews } from "@/services/client-side/get-breaking-news";

export function BreakingNewsBannerNext() {
  const { data, isLoading } = getBreakingNews();

  return (
    <BreakingNewsBanner label="Breaking news">
      {isLoading ? (
        <Skeleton variant="text" className="w-64 bg-primary-foreground/30" />
      ) : (
        `${data?.data?.headline}`
      )}
    </BreakingNewsBanner>
  );
}
