import Image, { type ImageProps } from "next/image";
import type React from "react";
import { cn } from "../lib/utils";
import { TransitionLink } from "../atoms/transition-link";

interface ArticleCardHorizontalProps extends Omit<
  ImageProps,
  "fill" | "width" | "height" | "className" | "title"
> {
  badge?: React.ReactNode;
  title: React.ReactNode;
  excerpt?: React.ReactNode;
  href?: string;
  className?: string;
}

function ArticleCardHorizontal({
  badge,
  title,
  excerpt,
  href,
  className,
  sizes = "150px",
  ...imageProps
}: ArticleCardHorizontalProps) {
  const inner = (
    <>
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-organic">
        <Image
          fill
          {...imageProps}
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1 space-y-1.5">
        {badge && <div>{badge}</div>}
        <div className="line-clamp-3 font-headline text-[0.9375rem] text-on-surface leading-snug transition-colors group-hover:text-primary">
          {title}
        </div>
        {excerpt && (
          <div className="line-clamp-2 font-body text-on-surface-variant text-xs">
            {excerpt}
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <TransitionLink
        className={cn("group flex items-start gap-4", className)}
        href={href}
      >
        {inner}
      </TransitionLink>
    );
  }

  return (
    <div className={cn("group flex items-start gap-4", className)}>{inner}</div>
  );
}

export { ArticleCardHorizontal };
