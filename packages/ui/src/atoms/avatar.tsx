import { cva, type VariantProps } from "class-variance-authority";
import Image, { type ImageProps } from "next/image";
import { cn } from "../lib/utils";

const avatarVariants = cva(
  "relative flex-shrink-0 overflow-hidden rounded-full bg-surface-container-high",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-14 w-14",
        xl: "h-20 w-20",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface AvatarProps
  extends VariantProps<typeof avatarVariants>,
    Omit<ImageProps, "fill" | "width" | "height" | "className"> {
  className?: string;
}

function Avatar({ size, className, ...imageProps }: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ size }), className)}>
      <Image fill {...imageProps} className="object-cover" />
    </div>
  );
}

export { Avatar, avatarVariants };
