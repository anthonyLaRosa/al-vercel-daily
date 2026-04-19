import { Headline } from "@repo/ui/atoms/typography/headline";
import { SearchLayout } from "@repo/ui/organisms/search-layout";
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
    <Suspense fallback={<div>Loading...</div>}>
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
        <Suspense fallback={<div>Loading...</div>}>
          <SearchContainerServerNext category={category} query={query} />
        </Suspense>
      </SearchLayout.Header>
      <SearchLayout.Grid>
        <Suspense
          key={`${query}-${category}`}
          fallback={<div>Loading Search Results...</div>}
        >
          <SearchBodyNext query={query} category={category} />
        </Suspense>
      </SearchLayout.Grid>
    </SearchLayout>
  );
}
