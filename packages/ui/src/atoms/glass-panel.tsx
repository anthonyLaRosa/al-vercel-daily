import type React from "react";
import { cn } from "../lib/utils";

interface GlassPanelProps extends React.ComponentProps<"div"> {}

function GlassPanel({ className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-organic border border-white/20 shadow-ambient",
        className,
      )}
      {...props}
    />
  );
}

export { GlassPanel };
