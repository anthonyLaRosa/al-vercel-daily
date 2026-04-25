"use client";

import { ArticleCard } from "@repo/ui/molecules/article-card";
import { SkeletonArticleCard } from "@repo/ui/molecules/skeleton-article-card";
import { getTrending } from "@/services/client-side/get-trending";
import { Badge } from "@repo/ui/atoms/badge";

export const TrendingArticlesNext = ({ id }: { id: string }) => {
  const { data, isFetching } = getTrending([id]);

  if (isFetching) {
    return Array.from({ length: 3 }).map((_, i) => (
      <SkeletonArticleCard key={i} />
    ));
  }

  return data?.data
    ?.slice(0, 3)
    .map((article) => (
      <ArticleCard
        key={article.id}
        src={article.image}
        alt={article.title}
        title={article.title}
        badge={<Badge variant="category">{article.category}</Badge>}
      />
    ));
};
