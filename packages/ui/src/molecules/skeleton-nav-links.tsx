import { Skeleton } from "../atoms/skeleton";
import { cn } from "../lib/utils";

function SkeletonNavLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: 4 }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton
        <Skeleton key={i} className="h-8 w-16 rounded-soft" />
      ))}
    </div>
  );
}

export { SkeletonNavLinks };
