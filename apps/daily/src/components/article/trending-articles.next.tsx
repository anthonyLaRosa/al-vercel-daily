"use client";

import { ArticleCard } from "@repo/ui/molecules/article-card";
import { getTrending } from "@/services/client-side/get-trending";

export const TrendingArticlesNext = ({ id }: { id: string }) => {
  const { data, isFetching } = getTrending([id]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return data?.data
    ?.slice(0, 3)
    .map((article) => (
      <ArticleCard
        key={article.id}
        src={article.image}
        alt={article.title}
        title={article.title}
      />
    ));
};
