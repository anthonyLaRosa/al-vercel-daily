import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "../../lib/utils";

const bodyTextVariants = cva(
  "font-body [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:opacity-75",
  {
    variants: {
      size: {
        lg: "text-base leading-[1.6]",
        md: "text-sm leading-[1.55]",
        sm: "text-xs leading-[1.5]",
      },
      color: {
        default: "text-on-surface",
        muted: "text-on-surface-variant",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "md",
      color: "default",
      weight: "normal",
    },
  },
);

interface BodyTextProps
  extends Omit<React.ComponentProps<"p">, "color">,
    VariantProps<typeof bodyTextVariants> {}

function BodyText({ size, color, weight, className, ...props }: BodyTextProps) {
  return (
    <p
      className={cn(bodyTextVariants({ size, color, weight }), className)}
      {...props}
    />
  );
}

export { BodyText, bodyTextVariants };
