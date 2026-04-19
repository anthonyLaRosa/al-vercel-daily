import type React from "react";
import { cn } from "../lib/utils";

interface NavBarProps {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  actions?: React.ReactNode;
  bottom?: React.ReactNode;
  className?: string;
}

/**
 * @deprecated
 */
function NavBar({ logo, nav, actions, bottom, className }: NavBarProps) {
  return (
    <header
      className={cn(
        "glass-panel sticky top-0 z-50 border-white/10 border-b",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-6">
        {logo && <div className="flex-shrink-0">{logo}</div>}
        {nav && <div className="min-w-0 flex-1">{nav}</div>}
        {actions && (
          <div className="ml-auto flex flex-shrink-0 items-center gap-3">
            {actions}
          </div>
        )}
      </div>
      {bottom && (
        <div className="border-outline-variant/20 border-t">{bottom}</div>
      )}
    </header>
  );
}

export { NavBar };
