"use client";

import { Button } from "@repo/ui/atoms/button";
import { useTransitionStore } from "@repo/ui/stores/transition-store";
import { setPaywall } from "@/helpers/paywall-action";

export function SubscribeButtonClient({ label }: { label: string }) {
  const startAppTransition = useTransitionStore((s) => s.startAppTransition);
  const isPending = useTransitionStore((s) => s.isPending);

  const handleClick = () => {
    startAppTransition?.(() => {
      setPaywall();
    });
  };

  return (
    <Button
      variant="default"
      size="sm"
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? "Processing..." : label}
    </Button>
  );
}
