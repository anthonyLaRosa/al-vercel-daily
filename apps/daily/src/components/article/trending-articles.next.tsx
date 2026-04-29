import { ArticleCard } from "@repo/ui/molecules/article-card";
import { Badge } from "@repo/ui/atoms/badge";
import type { Article } from "@/services/server-side/get-list-articles";
import { CardsGrid } from "@repo/ui/organisms/cards-grid";
import { SectionHeader } from "@repo/ui/molecules/section-header";
import { Button } from "@repo/ui/atoms/button";

export function TrendingArticlesNext({
  articles = [],
}: {
  articles?: Article[];
}) {
  return (
    <CardsGrid>
      <CardsGrid.Header>
        <SectionHeader
          title="Trending Now"
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
      </CardsGrid.Header>
      <CardsGrid.Items columns={3}>
        {articles?.slice(0, 3).map((article) => (
          <ArticleCard
            key={article.id}
            src={article.image}
            alt={article.title}
            title={article.title}
            badge={<Badge variant="category">{article.category}</Badge>}
          />
        ))}
      </CardsGrid.Items>
    </CardsGrid>
  );
}
