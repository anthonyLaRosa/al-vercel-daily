import type React from "react";
import { cn } from "../lib/utils";

interface ArticleHeaderProps {
  meta?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  author?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

function ArticleHeader({
  meta,
  title,
  subtitle,
  author,
  actions,
  className,
}: ArticleHeaderProps) {
  return (
    <header className={cn("mx-auto flex flex-col gap-4", className)}>
      {meta && <div className="flex flex-wrap items-center gap-3">{meta}</div>}
      <div>{title}</div>
      {subtitle && <div>{subtitle}</div>}
      {(author || actions) && (
        <div className="flex items-center justify-between gap-4 border-outline-variant/20 border-t pt-8">
          {author && <div className="min-w-0 flex-1">{author}</div>}
          {actions && (
            <div className="flex flex-shrink-0 items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export { ArticleHeader };
