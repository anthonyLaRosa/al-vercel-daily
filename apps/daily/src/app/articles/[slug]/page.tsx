import { Badge } from "@repo/ui/atoms/badge";
import { Headline } from "@repo/ui/atoms/typography/headline";
import { Label } from "@repo/ui/atoms/typography/label";
import { ArticleHeader } from "@repo/ui/molecules/article-header";
import { AuthorCard } from "@repo/ui/molecules/author-card";
import { HeroPlate } from "@repo/ui/molecules/hero-plate";
import { ArticleBody } from "@repo/ui/organisms/article-body";
import { ArticleBodyNext } from "@/components/article/article-body.next";
import { TrendingArticlesNext } from "@/components/article/trending-articles.next";
import { getArticleDetails } from "@/services/server-side/get-article-details";
import { ShareButtonNext } from "@/components/article/share-button.next";
import dayjs from "dayjs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrendingServer } from "@/services/server-side/get-trending";
import { cookies } from "next/headers";
import type { Article } from "@/services/server-side/get-list-articles";
import { cacheLife, cacheTag } from "next/cache";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

interface ArticleDetailComponentProps {
  article: Article;
  trendingArticles?: Article[];
  slug: string;
}
interface ArticleDetailContentProps extends ArticleDetailComponentProps {
  paid: "preview" | "full";
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

export async function generateStaticParams() {
  return [{ slug: "public-not-found" }];
}

export default async function ArticlePage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = await getArticleDetails(slug);

  if (!article.data) {
    notFound();
  }

  return <ArticleDetailPaywallCheck article={article.data} slug={slug} />;
}

async function ArticleDetailPaywallCheck({
  article,
  slug,
}: ArticleDetailComponentProps) {
  const paid = (await cookies()).has("paid") ? "full" : "preview";

  return <ArticleDetailContent article={article} paid={paid} slug={slug} />;
}

async function ArticleDetailContent({
  article,
  paid,
  slug,
}: ArticleDetailContentProps) {
  "use cache";

  cacheTag(
    "article-page",
    `article-page-${slug}`,
    `article-page-${slug}-${paid}`,
  );
  cacheLife("hours");

  const trendingArticles = await getTrendingServer([slug]);
  const { title, content, category, author, image, publishedAt, tags } =
    article;

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
            sizes: "(max-width: 767px) 100vw, (max-width: 1279px) calc(100vw - 64px), 1376px",
          }}
          className="aspect-[16/9] rounded-gallery"
          caption={<Label color="muted">{tags?.join(", ")}</Label>}
        />
      </ArticleBody.Hero>

      <ArticleBodyNext content={content} paid={paid} />

      <TrendingArticlesNext articles={trendingArticles?.data || []} />
    </ArticleBody>
  );
}
