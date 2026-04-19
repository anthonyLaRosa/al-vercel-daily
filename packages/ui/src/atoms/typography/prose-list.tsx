import type React from "react";
import { cn } from "../../lib/utils";

interface ProseListProps extends React.ComponentProps<"ul"> {
  ordered?: boolean;
}

function ProseList({
  ordered = false,
  className,
  children,
  ...props
}: ProseListProps) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={cn(
        "font-body text-on-surface my-4 space-y-1.5 pl-6 text-sm leading-relaxed",
        ordered ? "list-decimal" : "list-disc",
        className,
      )}
      {...(props as React.ComponentProps<"ol">)}
    >
      {children}
    </Tag>
  );
}

interface ProseItemProps extends React.ComponentProps<"li"> {}

function ProseItem({ className, ...props }: ProseItemProps) {
  return <li className={cn("text-on-surface pl-1", className)} {...props} />;
}

export { ProseList, ProseItem };
