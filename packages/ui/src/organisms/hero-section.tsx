import type React from "react";
import { cn } from "../lib/utils";

function HeroSection({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("flex flex-col md:relative", className)} {...props}>
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
      className={cn("px-4 py-4 md:absolute md:bottom-6 md:left-6 md:z-10 md:max-w-lg md:px-0 md:py-0", className)}
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
