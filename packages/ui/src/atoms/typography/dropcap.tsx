import type React from "react";
import { cn } from "../../lib/utils";

interface DropCapProps extends React.ComponentProps<"p"> {}

function DropCap({ className, ...props }: DropCapProps) {
  return (
    <p
      className={cn(
        "font-body text-base text-on-surface leading-[1.6]",
        "first-letter:float-left first-letter:mt-1 first-letter:mr-3",
        "first-letter:font-bold first-letter:font-headline first-letter:italic",
        "first-letter:text-[4.5rem] first-letter:text-primary first-letter:leading-[0.8]",
        className,
      )}
      {...props}
    />
  );
}

export { DropCap };
