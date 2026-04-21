"use client";

import { GlassPanel } from "@repo/ui/atoms/glass-panel";
import { Button } from "@repo/ui/atoms/button";
import { useState } from "react";
import type React from "react";

export function MobileNavNext({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        icon={open ? "X" : "Menu"}
        variant="ghost"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      />
      {open && (
        <div className="absolute top-full right-0 left-0 z-50 border-outline-variant/20 border-t">
          <GlassPanel className="rounded-none px-4 py-4">
            {children}
          </GlassPanel>
        </div>
      )}
    </div>
  );
}
