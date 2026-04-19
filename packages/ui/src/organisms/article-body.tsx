import type React from "react";
import { cn } from "../lib/utils";

function ArticleBody({
  className,
  children,
  ...props
}: React.ComponentProps<"article">) {
  return (
    <article className={cn("flex flex-col gap-8", className)} {...props}>
      {children}
    </article>
  );
}

ArticleBody.Header = function ArticleBodyHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("px-36", className)} {...props} />;
};

ArticleBody.Hero = function ArticleBodyHero({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("", className)} {...props} />;
};

ArticleBody.Content = function ArticleBodyContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-4 px-36", className)} {...props} />
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
