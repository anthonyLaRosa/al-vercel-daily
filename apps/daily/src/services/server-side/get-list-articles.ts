import { type DailyFetchParams, dailyFetch } from "../daily-fetch";

export type Category =
  | "changelog"
  | "engineering"
  | "customers"
  | "company-news"
  | "community";

export interface getListArticlesParams extends DailyFetchParams {
  page?: number;
  limit?: number;
  category?: Category;
  search?: string;
  featured?: boolean;
}

export interface ArticleParagraph {
  type: "paragraph";
  text: string;
}

export interface ArticleHeading {
  type: "heading";
  text: string;
  level: 2 | 3;
}

export interface ArticleBlockquote {
  type: "blockquote";
  text: string;
}

export interface ArticleImage {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticleUnorderedList {
  type: "unordered-list";
  items: string[];
}

export interface ArticleOrderedList {
  type: "ordered-list";
  items: string[];
}

export type ArticleContent = (
  | ArticleParagraph
  | ArticleHeading
  | ArticleBlockquote
  | ArticleImage
  | ArticleUnorderedList
  | ArticleOrderedList
)[];

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ArticleContent;
  category: Category;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  publishedAt: string;
  featured: boolean;
  tags: string[];
}

export async function getListArticles(params?: getListArticlesParams) {
  const internalUrl = "/articles";
  return dailyFetch<Article[]>(internalUrl, {
    params,
  });
}
