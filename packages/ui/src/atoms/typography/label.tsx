import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "../../lib/utils";

const labelVariants = cva("font-body font-semibold", {
  variants: {
    size: {
      xs: "text-[0.625rem]",
      sm: "text-xs",
    },
    color: {
      default: "text-on-surface",
      primary: "text-primary",
      muted: "text-on-surface-variant",
    },
    uppercase: {
      true: "uppercase tracking-widest",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "default",
  },
});

interface LabelProps
  extends Omit<React.ComponentProps<"span">, "color">,
    VariantProps<typeof labelVariants> {}

function Label({ size, color, uppercase, className, ...props }: LabelProps) {
  return (
    <span
      className={cn(labelVariants({ size, color, uppercase }), className)}
      {...props}
    />
  );
}

export { Label, labelVariants };
