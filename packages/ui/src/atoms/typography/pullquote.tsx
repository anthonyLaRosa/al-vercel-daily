import type React from "react";
import { cn } from "../../lib/utils";

interface PullquoteProps extends React.ComponentProps<"blockquote"> {
  attribution?: React.ReactNode;
}

function Pullquote({
  attribution,
  className,
  children,
  ...props
}: PullquoteProps) {
  return (
    <blockquote
      className={cn(
        "my-8 space-y-3 border-primary border-l-4 py-2 pl-6",
        className,
      )}
      {...props}
    >
      <div className="font-headline text-on-surface text-xl italic leading-relaxed">
        {children}
      </div>
      {attribution && (
        <footer className="font-body text-on-surface-variant text-sm">
          {attribution}
        </footer>
      )}
    </blockquote>
  );
}

export { Pullquote };
