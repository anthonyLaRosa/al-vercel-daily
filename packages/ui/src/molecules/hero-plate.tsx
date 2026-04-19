import Image, { type ImageProps } from "next/image";
import type React from "react";
import { cn } from "../lib/utils";

interface HeroPlateProps {
  caption?: React.ReactNode;
  className?: string;
  imageProps: ImageProps;
}

function HeroPlate({ caption, className, imageProps }: HeroPlateProps) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <Image {...imageProps} />
      {caption && (
        <div className="absolute bottom-4 left-4 z-10">{caption}</div>
      )}
    </div>
  );
}

export { HeroPlate };
