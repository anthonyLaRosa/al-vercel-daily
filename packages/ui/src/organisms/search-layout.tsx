import type React from "react";
import { cn } from "../lib/utils";

function SearchLayout({
  className,
  children,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main className={cn("", className)} {...props}>
      {children}
    </main>
  );
}

SearchLayout.Header = function SearchLayoutHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("pb-8 gap-4 flex flex-col", className)} {...props} />
  );
};

SearchLayout.Grid = function SearchLayoutGrid({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("grid grid-cols-12 gap-6", className)} {...props} />
  );
};

SearchLayout.Featured = function SearchLayoutFeatured({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("col-span-12 xl:col-span-8", className)} {...props} />
  );
};

SearchLayout.Side = function SearchLayoutSide({
  className,
  ...props
}: React.ComponentProps<"aside">) {
  return (
    <aside
      className={cn("col-span-12 flex flex-col gap-4 xl:col-span-4", className)}
      {...props}
    />
  );
};

SearchLayout.Results = function SearchLayoutResults({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
      {...props}
    />
  );
};

SearchLayout.Empty = function SearchLayoutEmpty({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("col-span-12", className)} {...props} />;
};

export { SearchLayout };
