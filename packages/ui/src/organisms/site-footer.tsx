import type React from "react";
import { cn } from "../lib/utils";

function SiteFooter({
  className,
  children,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn("bg-inverse-surface text-inverse-on-surface", className)}
      {...props}
    >
      {children}
    </footer>
  );
}

SiteFooter.Inner = function SiteFooterInner({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("px-4 md:px-8 py-6", className)} {...props} />;
};

SiteFooter.Brand = function SiteFooterBrand({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("mb-2", className)} {...props} />;
};

SiteFooter.Nav = function SiteFooterNav({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      className={cn("flex flex-wrap gap-x-6 gap-y-2", className)}
      {...props}
    />
  );
};

SiteFooter.Social = function SiteFooterSocial({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props} />
  );
};

SiteFooter.Bottom = function SiteFooterBottom({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between gap-4 border-inverse-on-surface/20 border-t pt-2 md:flex-row md:items-center",
        className,
      )}
      {...props}
    />
  );
};

export { SiteFooter };
