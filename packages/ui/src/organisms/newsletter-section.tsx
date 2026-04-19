import type React from "react";
import { cn } from "../lib/utils";

function NewsletterSection({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-surface-container-low px-6 py-20",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

NewsletterSection.Inner = function NewsletterSectionInner({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto max-w-xl space-y-6 text-center",
        className,
      )}
      {...props}
    />
  );
};

NewsletterSection.Decorative = function NewsletterSectionDecorative({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl",
        className,
      )}
      {...props}
    />
  );
};

export { NewsletterSection };
