"use client";

import { Button } from "@repo/ui/atoms/button";
import { useTransitionStore } from "@repo/ui/stores/transition-store";
import { setPaywall } from "@/helpers/paywall-action";

export function SubscribeButtonClient({ label }: { label: string }) {
  const startAppTransition = useTransitionStore((s) => s.startAppTransition);
  const status = useTransitionStore((s) => s.status);

  const handleClick = () => {
    startAppTransition?.(() => {
      setPaywall();
    }, "paywall");
  };

  return (
    <Button
      variant="default"
      size="sm"
      onClick={handleClick}
      disabled={status.id === "paywall" && status.isPending}
    >
      {status.id === "paywall" && status.isPending ? "Processing..." : label}
    </Button>
  );
}
