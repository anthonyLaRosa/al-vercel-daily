import type React from "react";
import { cn } from "../lib/utils";

function ArticleBody({
  className,
  children,
  ...props
}: React.ComponentProps<"article">) {
  return (
    <article
      className={cn("mx-auto max-w-7xl px-6 py-12", className)}
      {...props}
    >
      {children}
    </article>
  );
}

ArticleBody.Header = function ArticleBodyHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("mb-12", className)} {...props} />;
};

ArticleBody.Hero = function ArticleBodyHero({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("-mx-6 mb-12", className)} {...props} />;
};

ArticleBody.Layout = function ArticleBodyLayout({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("grid grid-cols-12 gap-12", className)} {...props} />
  );
};

ArticleBody.Content = function ArticleBodyContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "col-span-12 space-y-6 font-body text-base text-on-surface leading-[1.6]",
        className,
      )}
      {...props}
    />
  );
};

ArticleBody.Sidebar = function ArticleBodySidebar({
  className,
  ...props
}: React.ComponentProps<"aside">) {
  return (
    <aside
      className={cn(
        "sticky top-24 col-span-12 space-y-8 self-start lg:col-span-4",
        className,
      )}
      {...props}
    />
  );
};

export { ArticleBody };
