import type React from "react";
import { HeroImage } from "../atoms/hero-image";
import { cn } from "../lib/utils";
import { TransitionLink } from "../atoms/transition-link";

interface FeatureCardProps {
  src: string;
  alt: string;
  badge?: React.ReactNode;
  title: React.ReactNode;
  excerpt?: React.ReactNode;
  footer?: React.ReactNode;
  href?: string;
  className?: string;
  sizes?: string;
}

function FeatureCard({
  src,
  alt,
  badge,
  title,
  excerpt,
  footer,
  href,
  className,
  sizes,
}: FeatureCardProps) {
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
      <div className="space-y-4 p-6">
        {badge && <div>{badge}</div>}
        <div className="font-headline text-[1.375rem] text-on-surface leading-snug transition-colors group-hover:text-primary">
          {title}
        </div>
        {excerpt && (
          <div className="line-clamp-3 font-body text-on-surface-variant text-sm leading-relaxed">
            {excerpt}
          </div>
        )}
        {footer && (
          <div className="border-outline-variant/20 border-t pt-3">
            {footer}
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

export { FeatureCard };
