import type React from "react";
import { cn } from "../lib/utils";

function SiteNav({
  className,
  children,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "glass-panel sticky top-0 z-50 border-white/10 border-b",
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
}

SiteNav.Bar = function SiteNavBar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-16 items-center gap-8 px-4 md:px-8 justify-between",
        className,
      )}
      {...props}
    />
  );
};

SiteNav.Logo = function SiteNavLogo({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex-shrink-0", className)} {...props} />;
};

SiteNav.Nav = function SiteNavNav({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return <nav className={cn("min-w-0 flex-1", className)} {...props} />;
};

SiteNav.Actions = function SiteNavActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("ml-auto flex flex-shrink-0 items-center gap-3", className)}
      {...props}
    />
  );
};

SiteNav.Banner = function SiteNavBanner({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("border-outline-variant/20 border-t", className)}
      {...props}
    />
  );
};

export { SiteNav };
