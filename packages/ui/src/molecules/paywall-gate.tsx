import type React from "react";
import { GlassPanel } from "../atoms/glass-panel";
import { cn } from "../lib/utils";

interface PaywallGateProps {
  children?: React.ReactNode;
  cta?: React.ReactNode;
  previewLines?: number;
  className?: string;
}

function PaywallGate({ children, cta, className }: PaywallGateProps) {
  return (
    <div className={cn("relative", className)}>
      {children && (
        <div className="pointer-events-none select-none text-fade-out">
          {children}
        </div>
      )}
      {cta && (
        <div className="absolute right-0 bottom-0 left-0 flex justify-center px-6 pb-8">
          <GlassPanel className="w-full max-w-md space-y-4 p-8 text-center">
            {cta}
          </GlassPanel>
        </div>
      )}
    </div>
  );
}

export { PaywallGate };
