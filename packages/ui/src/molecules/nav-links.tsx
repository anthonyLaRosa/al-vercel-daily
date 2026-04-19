import type React from "react";
import { cn } from "../lib/utils";

interface NavItem {
  label: React.ReactNode;
  href: string;
  active?: boolean;
}

interface NavLinksProps {
  items: NavItem[];
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
      {items.map((item, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static nav items
        <li key={i}>
          <a
            className={cn(
              "inline-block rounded-soft px-3 py-2 font-body text-sm transition-colors",
              item.active
                ? "font-semibold text-primary"
                : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
            )}
            href={item.href}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export { NavLinks };
