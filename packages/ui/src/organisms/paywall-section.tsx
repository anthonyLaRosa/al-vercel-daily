import type React from "react";
import { cn } from "../lib/utils";

function PaywallSection({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("relative", className)} {...props}>
      {children}
    </section>
  );
}

PaywallSection.Preview = function PaywallSectionPreview({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("pointer-events-none select-none text-fade-out", className)}
      {...props}
    />
  );
};

PaywallSection.Gate = function PaywallSectionGate({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute right-0 bottom-0 left-0 flex justify-center px-6 pb-8",
        className,
      )}
      {...props}
    />
  );
};

export { PaywallSection };
