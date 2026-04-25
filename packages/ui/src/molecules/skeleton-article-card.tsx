import { Skeleton } from "../atoms/skeleton";
import { cn } from "../lib/utils";

function SkeletonArticleCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-organic bg-surface-container-lowest shadow-ambient",
        className,
      )}
    >
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="space-y-3 p-5">
        <Skeleton variant="text" className="w-full" />
        <Skeleton variant="text" className="w-3/4" />
      </div>
    </div>
  );
}

export { SkeletonArticleCard };
