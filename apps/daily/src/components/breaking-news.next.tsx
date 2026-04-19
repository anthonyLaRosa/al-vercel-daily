"use client";

import { BreakingNewsBanner } from "@repo/ui/molecules/breaking-news-banner";

import { getBreakingNews } from "@/services/client-side/get-breaking-news";

export function BreakingNewsBannerNext() {
  const { data, isLoading } = getBreakingNews();

  if (isLoading) {
    return "Loading...";
  }

  return (
    <BreakingNewsBanner label="Breaking news">
      {`${data?.data?.headline}`}
    </BreakingNewsBanner>
  );
}
