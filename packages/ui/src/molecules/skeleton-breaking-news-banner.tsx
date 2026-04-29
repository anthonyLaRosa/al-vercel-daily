import { Skeleton } from "../atoms/skeleton";

function SkeletonBreakingNewsBanner() {
  return (
    <div className="bg-primary px-8 py-2">
      <div className="flex items-center gap-4 overflow-hidden">
        <span className="flex flex-shrink-0 items-center gap-2">
          <Skeleton
            variant="circle"
            className="h-2 w-2 bg-primary-foreground/20"
          />
          <Skeleton className="h-3.5 w-28 rounded bg-primary-foreground/20" />
        </span>
        <span className="h-3 w-px flex-shrink-0 bg-primary-foreground/20" />
        <Skeleton className="h-4 w-64 rounded bg-primary-foreground/20" />
      </div>
    </div>
  );
}

export { SkeletonBreakingNewsBanner };
