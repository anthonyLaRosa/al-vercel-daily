import { cacheLife, cacheTag } from "next/cache";
import { CacheTag } from "../cache-tags";
import { dailyFetch } from "../daily-fetch";

export interface Configuration {
  publicationName: "Vercel Daily News";
  language: "en";
  features: {
    newsletter: true;
    bookmarks: true;
    comments: true;
    darkMode: true;
    searchSuggestions: true;
  };
  socialLinks: {
    twitter: "https://twitter.com/vercel";
    github: "https://github.com/vercel";
    discord: "https://discord.gg/vercel";
  };
  seo: {
    defaultTitle: "Vercel Daily News";
    titleTemplate: "%s | Vercel Daily News";
    defaultDescription: "The latest news, tutorials, and insights for modern web developers.";
  };
}

export async function getConfiguration() {
  "use cache";
  cacheLife("days");
  cacheTag(CacheTag.Configuration);

  const baseUrl = "https://vercel-daily-news-api.vercel.app/api";
  const internalUrl = `${baseUrl}/publication/config`;
  return dailyFetch<Configuration>(internalUrl);
}
