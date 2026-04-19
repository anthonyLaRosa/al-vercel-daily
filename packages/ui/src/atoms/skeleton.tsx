import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "../lib/utils";

const skeletonVariants = cva("animate-pulse bg-surface-container-high", {
  variants: {
    variant: {
      block: "rounded-organic",
      circle: "rounded-full",
      text: "h-4 rounded",
    },
  },
  defaultVariants: {
    variant: "block",
  },
});

interface SkeletonProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ variant, className, ...props }: SkeletonProps) {
  return (
    <div className={cn(skeletonVariants({ variant }), className)} {...props} />
  );
}

export { Skeleton, skeletonVariants };
