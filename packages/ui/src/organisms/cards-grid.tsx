import type React from "react";
import { cn } from "../lib/utils";

function CardsGrid({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("flex flex-col gap-6", className)} {...props}>
      {children}
    </section>
  );
}

CardsGrid.Header = function CardsGridHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("", className)} {...props} />;
};

const columnsMap = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

interface CardsGridItemsProps extends React.ComponentProps<"div"> {
  columns?: keyof typeof columnsMap;
}

CardsGrid.Items = function CardsGridItems({
  columns = 3,
  className,
  ...props
}: CardsGridItemsProps) {
  return (
    <div
      className={cn("grid gap-6", columnsMap[columns], className)}
      {...props}
    />
  );
};

export { CardsGrid };
