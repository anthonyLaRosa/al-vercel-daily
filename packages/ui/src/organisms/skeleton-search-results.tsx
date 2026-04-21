import { Skeleton } from "../atoms/skeleton";
import { cn } from "../lib/utils";

function SkeletonSearchResults({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton
        <div key={i} className="space-y-3">
          <Skeleton className="aspect-[4/3] w-full rounded-gallery" />
          <Skeleton variant="text" className="w-1/3" />
          <Skeleton variant="text" className="w-full h-5" />
          <Skeleton variant="text" className="w-4/5" />
        </div>
      ))}
    </div>
  );
}

export { SkeletonSearchResults };
