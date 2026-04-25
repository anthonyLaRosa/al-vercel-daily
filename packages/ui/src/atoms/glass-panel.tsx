import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "../lib/utils";

const glassPanelVariants = cva(
  "glass-panel rounded-organic border shadow-ambient",
  {
    variants: {
      variant: {
        default: "border-white/20",
        paywall: "border-black/20",
        hero: "md:bg-transparent md:border-transparent md:shadow-none! md:rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface GlassPanelProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof glassPanelVariants> {}

function GlassPanel({ variant, className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(glassPanelVariants({ variant }), className)}
      {...props}
    />
  );
}

export { GlassPanel };
