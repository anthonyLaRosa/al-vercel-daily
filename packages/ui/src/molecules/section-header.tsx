import type React from "react";
import { cn } from "../lib/utils";
import { Headline } from "../atoms/typography/headline";
import { BodyText } from "../atoms/typography/body-text";

interface SectionHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

function SectionHeader({
  title,
  description,
  actions,
  className,
}: SectionHeaderProps) {
  return (
    <section
      className={cn("flex items-center justify-between gap-4", className)}
    >
      <div>
        <Headline as="h2" italic>
          {title}
        </Headline>
        {description && <BodyText size="md">{description}</BodyText>}
      </div>
      {actions && (
        <div className="flex flex-shrink-0 items-center gap-2">{actions}</div>
      )}
    </section>
  );
}

export { SectionHeader };
