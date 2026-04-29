import type React from "react";
import { HeroImage } from "../atoms/hero-image";
import { cn } from "../lib/utils";
import { TransitionLink } from "../atoms/transition-link";

interface ArticleCardProps {
  src: string;
  alt: string;
  badge?: React.ReactNode;
  title: React.ReactNode;
  meta?: React.ReactNode;
  href?: string;
  className?: string;
  sizes?: string;
}

function ArticleCard({
  src,
  alt,
  badge,
  title,
  meta,
  href,
  className,
  sizes,
}: ArticleCardProps) {
  const inner = (
    <>
      <HeroImage
        alt={alt}
        aspectRatio="16/9"
        hoverZoom
        radius="none"
        src={src}
        sizes={sizes}
      />
      <div className="space-y-3 p-5">
        {badge && <div>{badge}</div>}
        <div className="font-headline text-[1.0625rem] text-on-surface leading-snug transition-colors group-hover:text-primary">
          {title}
        </div>
        {meta && (
          <div className="font-body text-on-surface-variant text-xs">
            {meta}
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <TransitionLink
        className={cn(
          "group block overflow-hidden rounded-organic bg-surface-container-lowest shadow-ambient transition-shadow hover:shadow-lg",
          className,
        )}
        href={href}
      >
        {inner}
      </TransitionLink>
    );
  }

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-organic bg-surface-container-lowest shadow-ambient",
        className,
      )}
    >
      {inner}
    </div>
  );
}

export { ArticleCard };
