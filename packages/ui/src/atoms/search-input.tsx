"use client";

import { Search, X } from "lucide-react";
import { cn } from "../lib/utils";

interface SearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className,
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-4 h-5 w-5 text-on-surface-variant" />
      <input
        className="w-full rounded-soft bg-surface-container-highest py-3 pr-10 pl-11 font-body text-on-surface text-sm transition-all placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20"
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      {value && (
        <button
          className="-translate-y-1/2 absolute top-1/2 right-3 text-on-surface-variant transition-colors hover:text-on-surface"
          onClick={() => onChange?.("")}
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export { SearchInput };
