"use client";

import { Button } from "@repo/ui/atoms/button";

export function ShareButtonNext() {
  return (
    <Button
      icon="Share2"
      variant="ghost"
      aria-label="Share"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
      }}
    />
  );
}
