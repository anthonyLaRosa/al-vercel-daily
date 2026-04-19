import type React from "react";
import { cn } from "../../lib/utils";

interface FadeTextProps extends React.ComponentProps<"div"> {}

function FadeText({ className, ...props }: FadeTextProps) {
  return (
    <div
      className={cn("pointer-events-none select-none text-fade-out", className)}
      {...props}
    />
  );
}

export { FadeText };
