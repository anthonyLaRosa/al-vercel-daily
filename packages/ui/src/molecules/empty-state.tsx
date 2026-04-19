import type React from "react";
import { cn } from "../lib/utils";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  suggestions?: React.ReactNode;
  className?: string;
}

function EmptyState({
  icon,
  title,
  description,
  suggestions,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center space-y-6 px-6 py-20 text-center",
        className,
      )}
    >
      {icon && (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-container text-on-surface-variant">
          {icon}
        </div>
      )}
      <div className="max-w-sm space-y-2">
        <div className="font-headline text-[1.375rem] text-on-surface">
          {title}
        </div>
        {description && (
          <div className="font-body text-on-surface-variant text-sm leading-relaxed">
            {description}
          </div>
        )}
      </div>
      {suggestions && <div>{suggestions}</div>}
    </div>
  );
}

export { EmptyState };
