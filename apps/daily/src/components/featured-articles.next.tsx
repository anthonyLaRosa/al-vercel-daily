import { AuthorCard } from "@repo/ui/molecules/author-card";
import { ArticleCardHorizontal } from "@repo/ui/molecules/article-card-horizontal";
import { Badge } from "@repo/ui/atoms/badge";
import { FeatureCard } from "@repo/ui/molecules/feature-card";
import { EditorialGrid } from "@repo/ui/organisms/editorial-grid";
import { getListArticles } from "@/services/server-side/get-list-articles";
import { capitalizeFirstLetter } from "@/helpers/string-helpers";
import { cacheLife, cacheTag } from "next/cache";

export async function FeaturedArticlesNext() {
  "use cache: remote";
  cacheTag("featured-articles");
  cacheLife("hours");

  const listArticles = await getListArticles({
    page: 1,
    featured: true,
    limit: 7,
  });
  const firstArticle = listArticles?.data?.[0];
  return (
    <EditorialGrid>
      <EditorialGrid.Featured>
        <FeatureCard
          src={firstArticle?.image || ""}
          alt={firstArticle?.title || ""}
          href={`/articles/${firstArticle?.slug}`}
          sizes="(max-width: 1279px) 100vw, 784px"
          badge={
            <Badge variant="tag">
              {capitalizeFirstLetter(firstArticle?.category)}
            </Badge>
          }
          title={firstArticle?.title || ""}
          excerpt={firstArticle?.excerpt || ""}
          footer={<AuthorCard name={firstArticle?.author.name || ""} />}
        />
      </EditorialGrid.Featured>
      <EditorialGrid.Secondary>
        {listArticles?.data?.slice(1, 7).map((article) => (
          <ArticleCardHorizontal
            key={article.id}
            src={article.image}
            alt={article.title}
            href={`/articles/${article.slug}`}
            badge={
              <Badge variant="tag">
                {capitalizeFirstLetter(article.category)}
              </Badge>
            }
            title={article.title}
            excerpt={article.excerpt}
          />
        ))}
      </EditorialGrid.Secondary>
    </EditorialGrid>
  );
}
