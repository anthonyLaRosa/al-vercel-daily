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
import { SkeletonArticleBody } from "@repo/ui/organisms/skeleton-article-body";
import { ArticleBodyNext } from "@/components/article/article-body.next";
import { TrendingArticlesNext } from "@/components/article/trending-articles.next";
import { getArticleDetails } from "@/services/server-side/get-article-details";
import { ShareButtonNext } from "@/components/article/share-button.next";
import dayjs from "dayjs";
import type { Metadata } from "next";
import { Suspense } from "react";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getArticleDetails(slug);

  return {
    title: product.data?.title || "Article",
  };
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  return (
    <Suspense fallback={<SkeletonArticleBody />}>
      <ArticleDetailContent params={params} />
    </Suspense>
  );
}

async function ArticleDetailContent({ params }: ArticleDetailPageProps) {
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
              <Badge variant="category">{category}</Badge>
              <Label color="muted">
                Published at {dayjs(publishedAt).format("MMMM D, YYYY")}
              </Label>
            </>
          }
          title={
            <Headline as="h1" size="display" italic>
              {title}
            </Headline>
          }
          author={<AuthorCard name={author?.name || ""} />}
          actions={<ShareButtonNext />}
        />
      </ArticleBody.Header>

      <ArticleBody.Hero>
        <HeroPlate
          imageProps={{
            src: image,
            alt: title,
            fill: true,
          }}
          className="aspect-[16/9] rounded-gallery"
          caption={<Label color="muted">{tags?.join(", ")}</Label>}
        />
      </ArticleBody.Hero>

      <ArticleBodyNext content={content} />

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
          <TrendingArticlesNext id={slug} />
        </CardsGrid.Items>
      </CardsGrid>
    </ArticleBody>
  );
}
