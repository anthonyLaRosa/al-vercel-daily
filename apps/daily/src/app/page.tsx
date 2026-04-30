import { Button } from "@repo/ui/atoms/button";
import { SectionHeader } from "@repo/ui/molecules/section-header";
import { SkeletonEditorialGrid } from "@repo/ui/organisms/skeleton-editorial-grid";
import { Suspense } from "react";
import { FeaturedArticlesNext } from "@/components/featured-articles.next";
import { HeroBannerNext } from "@/components/hero-banner.next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  openGraph: {
    title: "Home",
    description: "Home",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroBannerNext />
      <SectionHeader
        title="Latest Narratives"
        description="A curated selection of the day's most profound investigations and
            cultural observations."
        actions={
          <Button
            variant="ghost"
            icon="ArrowRight"
            iconPosition="right"
            href="/search"
          >
            See all
          </Button>
        }
      />
      <Suspense fallback={<SkeletonEditorialGrid />}>
        <FeaturedArticlesNext />
      </Suspense>
    </>
  );
}
