import type React from "react";
import { GlassPanel } from "../atoms/glass-panel";
import { cn } from "../lib/utils";

interface GlassCaptionProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function GlassCaption({ label, children, className }: GlassCaptionProps) {
  return (
    <GlassPanel className={cn("max-w-sm space-y-1 p-4", className)}>
      {label && (
        <div className="font-body font-semibold text-[0.625rem] text-primary uppercase tracking-widest">
          {label}
        </div>
      )}
      <div className="font-headline text-on-surface text-sm italic leading-snug">
        {children}
      </div>
    </GlassPanel>
  );
}

export { GlassCaption };
