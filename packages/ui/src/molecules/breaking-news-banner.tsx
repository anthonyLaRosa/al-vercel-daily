import type React from "react";
import { cn } from "../lib/utils";

interface BreakingNewsBannerProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function BreakingNewsBanner({
  label,
  children,
  className,
}: BreakingNewsBannerProps) {
  return (
    <div
      className={cn("bg-primary px-8 py-2 text-primary-foreground", className)}
    >
      <div className="flex items-center gap-4 overflow-hidden">
        {label && (
          <span className="flex flex-shrink-0 items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-foreground" />
            <span className="font-body font-bold text-xs uppercase tracking-widest">
              {label}
            </span>
          </span>
        )}
        {label && (
          <span className="h-3 w-px flex-shrink-0 bg-primary-foreground/40" />
        )}
        <div className="truncate font-body text-sm">{children}</div>
      </div>
    </div>
  );
}

export { BreakingNewsBanner };
