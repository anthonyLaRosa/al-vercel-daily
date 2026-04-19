import { Button } from "@repo/ui/atoms/button";
import { SectionHeader } from "@repo/ui/molecules/section-header";
import { Suspense } from "react";
import { FeaturedArticlesNext } from "@/components/featured-articles.next";
import { HeroBannerNext } from "@/components/hero-banner.next";

export default function HomePage() {
  return (
    <>
      <HeroBannerNext />
      <SectionHeader
        title="Latest Narratives"
        description="A curated selection of the day's most profound investigations and
            cultural observations."
        actions={
          <Button variant="ghost" icon="ArrowRight" iconPosition="right">
            See all
          </Button>
        }
      />
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedArticlesNext />
      </Suspense>
    </>
  );
}
