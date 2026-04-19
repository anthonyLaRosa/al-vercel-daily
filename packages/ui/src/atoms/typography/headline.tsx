import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "../../lib/utils";

const headlineVariants = cva("font-headline text-on-surface", {
  variants: {
    size: {
      display: "text-[3.5rem] leading-[1.08] tracking-tight",
      "headline-lg": "text-[2.5rem] leading-[1.12] tracking-tight",
      "headline-md": "text-[1.75rem] leading-[1.2] tracking-tight",
      "title-lg": "text-[1.375rem] leading-[1.3]",
      "title-md": "text-[1.125rem] leading-[1.35]",
    },
    italic: {
      true: "italic",
    },
  },
  defaultVariants: {
    size: "headline-md",
  },
});

type HeadlineTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

interface HeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headlineVariants> {
  as?: HeadlineTag;
}

function Headline({
  as: Tag = "h2",
  size,
  italic,
  className,
  ...props
}: HeadlineProps) {
  return (
    <Tag
      className={cn(headlineVariants({ size, italic }), className)}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    />
  );
}

export { Headline, headlineVariants };
