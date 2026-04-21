import type React from "react";
import { cn } from "../lib/utils";

function EditorialGrid({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("grid grid-cols-12 gap-8", className)} {...props}>
      {children}
    </section>
  );
}

EditorialGrid.Featured = function EditorialGridFeatured({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("col-span-12 xl:col-span-7", className)} {...props} />
  );
};

EditorialGrid.Secondary = function EditorialGridSecondary({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("col-span-12 flex flex-col gap-6 xl:col-span-5", className)}
      {...props}
    />
  );
};

EditorialGrid.Full = function EditorialGridFull({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("col-span-12", className)} {...props} />;
};

EditorialGrid.Third = function EditorialGridThird({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("col-span-12 md:col-span-6 xl:col-span-4", className)}
      {...props}
    />
  );
};

export { EditorialGrid };
