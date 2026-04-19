import { cva, type VariantProps } from "class-variance-authority";
import { icons } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.98]",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90 active:scale-[0.98]",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:scale-[0.98]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-6 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  href?: string;
  icon?: keyof typeof icons;
  iconPosition?: "left" | "right";
}

function Button({
  className,
  variant,
  size,
  href,
  icon,
  iconPosition = "left",
  children,
  ...props
}: ButtonProps) {
  const Icon = icon ? icons[icon] : null;
  const iconLeft = Icon && iconPosition === "left" && <Icon className="h-4 w-4" />;
  const iconRight = Icon && iconPosition === "right" && <Icon className="h-4 w-4" />;
  const sharedClass = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link href={href} className={sharedClass}>
        {iconLeft}{children}{iconRight}
      </Link>
    );
  }

  return (
    <button className={sharedClass} {...props}>
      {iconLeft}{children}{iconRight}
    </button>
  );
}

export { Button, buttonVariants };
