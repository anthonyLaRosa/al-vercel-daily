import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 font-body font-semibold",
  {
    variants: {
      variant: {
        category: "text-primary text-xs uppercase tracking-widest",
        tag: "text-on-surface-variant text-xs",
        status: "text-on-surface text-xs",
      },
    },
    defaultVariants: {
      variant: "category",
    },
  },
);

interface BadgeProps
  extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {}

function Badge({ variant, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
