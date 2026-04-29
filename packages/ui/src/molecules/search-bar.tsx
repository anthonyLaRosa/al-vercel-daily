"use client";

import {
  Content,
  Icon,
  Item,
  ItemText,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select";
import { ChevronDown, Search } from "lucide-react";
import type React from "react";
import { Button } from "../atoms/button";
import { cn } from "../lib/utils";

export function SearchBar({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return <form className={cn("flex gap-3", className)} {...props} />;
}

export function SearchBarInput({
  className,
  placeholder = "Search articles, topics, authors...",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="relative flex-1">
      <Search className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-4 h-5 w-5 text-on-surface-variant" />
      <input
        className={cn(
          "w-full rounded-soft bg-surface-container-highest py-2 pr-2 pl-12 font-body text-base text-on-surface transition-all placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20",
          className,
        )}
        placeholder={placeholder}
        type="text"
        {...props}
      />
    </div>
  );
}

export interface LabelValue {
  label: string;
  value: string;
}

interface SearchBarSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: LabelValue[];
  allLabel?: string;
  className?: string;
}

export function SearchBarSelect({
  value,
  onValueChange,
  options,
  allLabel = "All Topics",
  className,
}: SearchBarSelectProps) {
  return (
    <Root value={value} onValueChange={onValueChange}>
      <Trigger
        className={cn(
          "flex cursor-pointer items-center justify-between gap-2 rounded-soft bg-surface-container-highest px-4 font-body text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
          className,
        )}
      >
        <Value />
        <Icon>
          <ChevronDown className="h-4 w-4 text-on-surface-variant" />
        </Icon>
      </Trigger>
      <Portal>
        <Content
          className="z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-soft bg-surface-container-lowest shadow-lg"
          position="popper"
          sideOffset={4}
        >
          <Viewport className="p-1">
            <Item
              value="all"
              className="flex cursor-pointer items-center rounded-sm px-3 py-2 font-body text-on-surface text-sm outline-none hover:bg-surface-container-highest data-[highlighted]:bg-surface-container-highest"
            >
              <ItemText>{allLabel}</ItemText>
            </Item>
            {options.map((option) => (
              <Item
                key={option.value}
                value={option.value}
                className="flex cursor-pointer items-center rounded-sm px-3 py-2 font-body text-on-surface text-sm outline-none hover:bg-surface-container-highest data-[highlighted]:bg-surface-container-highest"
              >
                <ItemText>{option.label}</ItemText>
              </Item>
            ))}
          </Viewport>
        </Content>
      </Portal>
    </Root>
  );
}

export function SearchBarButton({
  children = "Search",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn("flex-shrink-0 px-8 py-4 h-[40px]", className)}
      type="button"
      {...props}
    >
      {children}
    </Button>
  );
}
