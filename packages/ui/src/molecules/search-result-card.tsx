import Link from "next/link";
import type React from "react";
import { HeroImage } from "../atoms/hero-image";
import { cn } from "../lib/utils";

interface SearchResultCardProps {
  src: string;
  alt: string;
  badge?: React.ReactNode;
  title: React.ReactNode;
  excerpt?: React.ReactNode;
  overlay?: boolean;
  href?: string;
  className?: string;
}

function SearchResultCard({
  src,
  alt,
  badge,
  title,
  excerpt,
  overlay = false,
  href,
  className,
}: SearchResultCardProps) {
  if (overlay) {
    const inner = (
      <div
        className={cn(
          "group relative overflow-hidden rounded-gallery shadow-ambient",
          className,
        )}
      >
        <HeroImage
          alt={alt}
          aspectRatio="4/3"
          hoverZoom
          radius="none"
          src={src}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/20 to-transparent" />
        <div className="absolute right-0 bottom-0 left-0 space-y-2 p-5">
          {badge && <div>{badge}</div>}
          <div className="font-headline text-[1.125rem] text-inverse-on-surface leading-snug">
            {title}
          </div>
          {excerpt && (
            <div className="line-clamp-2 font-body text-inverse-on-surface/75 text-xs">
              {excerpt}
            </div>
          )}
        </div>
      </div>
    );
    if (href) {
      return <Link href={href}>{inner}</Link>;
    }
    return inner;
  }

  const inner = (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-organic bg-surface-container-lowest shadow-ambient",
        className,
      )}
    >
      <HeroImage
        alt={alt}
        aspectRatio="16/9"
        hoverZoom
        radius="none"
        src={src}
      />
      <div className="flex-1 space-y-2 p-4">
        {badge && <div>{badge}</div>}
        <div className="font-headline text-[0.9375rem] text-on-surface leading-snug transition-colors group-hover:text-primary">
          {title}
        </div>
        {excerpt && (
          <div className="line-clamp-2 font-body text-on-surface-variant text-xs">
            {excerpt}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link className="block h-full" href={href}>
        {inner}
      </Link>
    );
  }
  return inner;
}

export { SearchResultCard };
