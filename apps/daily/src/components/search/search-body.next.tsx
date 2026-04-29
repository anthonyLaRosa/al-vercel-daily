import { Badge } from "@repo/ui/atoms/badge";
import { EmptyState } from "@repo/ui/molecules/empty-state";
import { SearchResultCard } from "@repo/ui/molecules/search-result-card";
import { SearchLayout } from "@repo/ui/organisms/search-layout";
import {
  type Category,
  getListArticles,
} from "@/services/server-side/get-list-articles";

export async function SearchBodyNext({
  query,
  category,
}: {
  query?: string;
  category?: string;
}) {
  const listArticles = await getListArticles({
    page: 1,
    search: query,
    limit: 10,
    category: category as Category,
  });

  if (!listArticles.data || listArticles.data.length === 0) {
    return (
      <SearchLayout.Empty>
        <EmptyState title="No results" description="Try different terms" />
      </SearchLayout.Empty>
    );
  }

  return (
    <SearchLayout.Results>
      {listArticles.data.map((article) => (
        <SearchResultCard
          key={article.id}
          src={article.image}
          alt={article.title}
          title={article.title}
          excerpt={article.excerpt}
          badge={<Badge>{article.category}</Badge>}
          href={`/articles/${article.slug}`}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) calc(50vw - 44px), 443px"
        />
      ))}
    </SearchLayout.Results>
  );
}
