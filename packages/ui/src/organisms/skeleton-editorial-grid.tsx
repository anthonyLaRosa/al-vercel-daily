import { Skeleton } from "../atoms/skeleton";
import { cn } from "../lib/utils";

function SkeletonEditorialGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-12 gap-8", className)}>
      {/* Featured */}
      <div className="col-span-12 xl:col-span-7">
        <Skeleton className="aspect-video w-full rounded-organic" />
        <div className="mt-4 space-y-2">
          <Skeleton variant="text" className="w-1/4" />
          <Skeleton variant="text" className="w-3/4 h-6" />
          <Skeleton variant="text" className="w-full" />
          <Skeleton variant="text" className="w-2/3" />
        </div>
      </div>
      {/* Secondary */}
      <div className="col-span-12 flex flex-col gap-6 xl:col-span-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-start gap-4">
            <Skeleton className="h-24 w-24 flex-shrink-0 rounded-organic" />
            <div className="min-w-0 flex-1 space-y-2">
              <Skeleton variant="text" className="w-1/3" />
              <Skeleton variant="text" className="w-full" />
              <Skeleton variant="text" className="w-4/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { SkeletonEditorialGrid };
