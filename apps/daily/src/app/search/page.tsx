import { Headline } from "@repo/ui/atoms/typography/headline";
import { SkeletonSearchBar } from "@repo/ui/molecules/skeleton-search-bar";
import { SearchLayout } from "@repo/ui/organisms/search-layout";
import { SkeletonSearchResults } from "@repo/ui/organisms/skeleton-search-results";
import { Suspense } from "react";
import { SearchBodyNext } from "@/components/search/search-body.next";
import type { Category } from "@/services/server-side/get-list-articles";
import { SearchContainerServerNext } from "@/components/search/serch-container-server.next";

export interface SearchPageProps {
  searchParams: Promise<{ query: string; category: Category }>;
}

export default async function SearchPageWrapper({
  searchParams,
}: SearchPageProps) {
  return (
    <Suspense
      fallback={
        <SearchLayout>
          <SearchLayout.Header>
            <Headline as="h1" size="headline-lg">
              Explore the Archives
            </Headline>
            <SkeletonSearchBar />
          </SearchLayout.Header>
          <SearchLayout.Grid>
            <SkeletonSearchResults />
          </SearchLayout.Grid>
        </SearchLayout>
      }
    >
      <SearchPage searchParams={searchParams} />
    </Suspense>
  );
}

async function SearchPage({ searchParams }: SearchPageProps) {
  const { query, category } = await searchParams;

  return (
    <SearchLayout>
      <SearchLayout.Header>
        <Headline as="h1" size="headline-lg">
          Explore the Archives
        </Headline>
        <Suspense fallback={<SkeletonSearchBar />}>
          <SearchContainerServerNext category={category} query={query} />
        </Suspense>
      </SearchLayout.Header>
      <SearchLayout.Grid>
        <Suspense
          key={`${query}-${category}`}
          fallback={<SkeletonSearchResults />}
        >
          <SearchBodyNext query={query} category={category} />
        </Suspense>
      </SearchLayout.Grid>
    </SearchLayout>
  );
}
