import type React from "react";
import { Divider } from "../atoms/divider";
import { cn } from "../lib/utils";

interface FooterLink {
  label: React.ReactNode;
  href: string;
}

interface FooterBarProps {
  brand?: React.ReactNode;
  links?: FooterLink[];
  social?: React.ReactNode;
  copyright?: React.ReactNode;
  className?: string;
}

function FooterBar({
  brand,
  links,
  social,
  copyright,
  className,
}: FooterBarProps) {
  return (
    <footer
      className={cn(
        "bg-inverse-surface px-6 py-12 text-inverse-on-surface",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl space-y-8">
        {brand && <div>{brand}</div>}
        <Divider className="bg-inverse-on-surface" opacity={20} />
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          {links && links.length > 0 && (
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link, i) => (
                <a
                  className="font-body text-inverse-on-surface/60 text-xs transition-colors hover:text-inverse-on-surface"
                  href={link.href}
                  // biome-ignore lint/suspicious/noArrayIndexKey: static footer links
                  key={i}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
          {social && <div className="flex items-center gap-3">{social}</div>}
        </div>
        {copyright && (
          <div className="text-center font-body text-inverse-on-surface/40 text-xs md:text-left">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}

export { FooterBar };
