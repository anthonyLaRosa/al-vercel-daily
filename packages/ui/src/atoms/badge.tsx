import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 font-body font-semibold",
  {
    variants: {
      variant: {
        category:
          "rounded-soft bg-primary/10 px-2.5 py-0.5 text-primary text-xs uppercase tracking-widest",
        tag: "rounded-soft bg-surface-container px-2.5 py-0.5 text-on-surface-variant text-xs",
        status:
          "rounded-full bg-surface-container-high px-3 py-1 text-on-surface text-xs",
      },
    },
    defaultVariants: {
      variant: "category",
    },
  },
);

interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

function Badge({ variant, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
