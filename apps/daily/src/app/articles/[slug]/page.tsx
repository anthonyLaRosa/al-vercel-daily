import { Badge } from "@repo/ui/atoms/badge";
import { Button } from "@repo/ui/atoms/button";
import { Headline } from "@repo/ui/atoms/typography/headline";
import { Label } from "@repo/ui/atoms/typography/label";
import { ArticleHeader } from "@repo/ui/molecules/article-header";
import { AuthorCard } from "@repo/ui/molecules/author-card";
import { HeroPlate } from "@repo/ui/molecules/hero-plate";
import { SectionHeader } from "@repo/ui/molecules/section-header";
import { ArticleBody } from "@repo/ui/organisms/article-body";
import { CardsGrid } from "@repo/ui/organisms/cards-grid";
import { ArticleBodyNext } from "@/components/article/article-body.next";
import { TrendingArticlesNext } from "@/components/article/trending-articles.next";
import { getArticleDetails } from "@/services/server-side/get-article-details";

export interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = await getArticleDetails(slug);

  if (!article.data) {
    return <div>Article not found</div>;
  }

  const { title, content, category, author, image, publishedAt, tags } =
    article.data;

  return (
    <ArticleBody>
      <ArticleBody.Header>
        <ArticleHeader
          meta={
            <>
              <Badge>{category}</Badge>
              <Label color="muted">Published at {publishedAt}</Label>
            </>
          }
          title={
            <Headline as="h1" size="display" italic>
              {title}
            </Headline>
          }
          author={<AuthorCard name={author?.name || ""} />}
          actions={<Button>Share</Button>}
        />
      </ArticleBody.Header>

      <ArticleBody.Hero>
        <HeroPlate
          src={image}
          className="aspect-[21/9] rounded-gallery"
          alt={title}
          fill
        />
      </ArticleBody.Hero>

      <ArticleBody.Layout>
        <ArticleBodyNext content={content} />
      </ArticleBody.Layout>
      <CardsGrid>
        <CardsGrid.Header>
          <SectionHeader
            title="Trending Now"
            actions={<Button variant="ghost">See all</Button>}
          />
        </CardsGrid.Header>
        <CardsGrid.Items columns={3}>
          <TrendingArticlesNext id={slug} />
        </CardsGrid.Items>
      </CardsGrid>
    </ArticleBody>
  );
}
