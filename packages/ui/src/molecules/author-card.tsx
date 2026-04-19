import type React from "react";
import { cn } from "../lib/utils";

interface AuthorCardProps {
  name: string;
  role?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

function AuthorCard({ name, role, actions, className }: AuthorCardProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="min-w-0 flex-1">
        <div className="font-body font-semibold text-on-surface text-sm leading-snug">
          {name}
        </div>
        {role && (
          <div className="font-body text-on-surface-variant text-xs">
            {role}
          </div>
        )}
      </div>
      {actions && <div className="flex-shrink-0">{actions}</div>}
    </div>
  );
}

export { AuthorCard };
