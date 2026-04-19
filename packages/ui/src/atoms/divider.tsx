import type React from "react";
import { cn } from "../lib/utils";

interface DividerProps extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical";
  opacity?: number;
}

function Divider({
  orientation = "horizontal",
  opacity = 100,
  className,
  style,
  ...props
}: DividerProps) {
  return (
    <div
      className={cn(
        "bg-outline-variant",
        orientation === "horizontal" ? "h-px w-full" : "w-px self-stretch",
        className,
      )}
      aria-orientation={orientation}
      role="separator"
      style={{ opacity: opacity / 100, ...style }}
      {...props}
    />
  );
}

export { Divider };
