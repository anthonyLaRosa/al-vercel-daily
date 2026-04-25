import type React from "react";
import { cn } from "../lib/utils";

function HeroSection({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "relative md:grid md:grid-cols-[1fr_1.2fr] md:items-center md:gap-12",
        className,
      )}
      {...props}
    >
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
      className={cn("absolute inset-4 z-10 flex flex-col justify-center md:static md:inset-auto md:flex md:flex-col md:gap-4", className)}
      {...props}
    />
  );
};

HeroSection.Kicker = function HeroSectionKicker({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("", className)} {...props} />;
};

export { HeroSection };
