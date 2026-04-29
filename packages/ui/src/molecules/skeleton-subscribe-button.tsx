import { Skeleton } from "../atoms/skeleton";
import { cn } from "../lib/utils";

function SkeletonSubscribeButton({ className }: { className?: string }) {
  return <Skeleton className={cn("h-8 w-24 rounded-soft", className)} />;
}

export { SkeletonSubscribeButton };
