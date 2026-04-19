import type React from "react";
import { cn } from "../lib/utils";

function HeroSection({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("relative", className)} {...props}>
      {children}
    </section>
  );
}

HeroSection.Plate = function HeroSectionPlate({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("w-full", className)} {...props} />;
};

HeroSection.Overlay = function HeroSectionOverlay({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("absolute bottom-6 left-6 z-10 max-w-lg", className)}
      {...props}
    />
  );
};

HeroSection.Kicker = function HeroSectionKicker({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("mb-4", className)} {...props} />;
};

export { HeroSection };
