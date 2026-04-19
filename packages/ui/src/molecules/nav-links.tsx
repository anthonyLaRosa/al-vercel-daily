import { cn } from "../lib/utils";
import type { LabelValue } from "./search-bar";
import Link from "next/link";

interface NavLinksProps {
  items: LabelValue[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

function NavLinks({
  items,
  orientation = "horizontal",
  className,
}: NavLinksProps) {
  return (
    <ul
      className={cn(
        "flex gap-1",
        orientation === "vertical" && "flex-col",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.value}>
          <Link
            className={cn(
              "inline-block rounded-soft px-3 py-2 font-body text-sm transition-colors",
            )}
            href={`/search?category=${item.value}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { NavLinks };
