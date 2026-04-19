import Image, { type ImageProps } from "next/image";
import { cn } from "../lib/utils";

const aspectRatioMap = {
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
} as const;

const radiusMap = {
  none: "",
  soft: "rounded-soft",
  organic: "rounded-organic",
  gallery: "rounded-gallery",
} as const;

interface HeroImageProps
  extends Omit<ImageProps, "fill" | "width" | "height" | "className"> {
  aspectRatio?: keyof typeof aspectRatioMap;
  hoverZoom?: boolean;
  radius?: keyof typeof radiusMap;
  className?: string;
  imgClassName?: string;
}

function HeroImage({
  aspectRatio = "16/9",
  hoverZoom = false,
  radius = "organic",
  className,
  imgClassName,
  ...imageProps
}: HeroImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectRatioMap[aspectRatio],
        radiusMap[radius],
        className,
      )}
    >
      <Image
        fill
        {...imageProps}
        className={cn(
          "object-cover",
          hoverZoom &&
            "transition-transform duration-700 ease-out group-hover:scale-105",
          imgClassName,
        )}
      />
    </div>
  );
}

export { HeroImage };
