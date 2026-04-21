import { Skeleton } from "../atoms/skeleton";
import { cn } from "../lib/utils";

function SkeletonSearchBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-3", className)}>
      <Skeleton className="h-10 flex-1 rounded-soft" />
      <Skeleton className="h-10 w-32 rounded-soft" />
      <Skeleton className="h-10 w-24 rounded-soft" />
    </div>
  );
}

export { SkeletonSearchBar };
