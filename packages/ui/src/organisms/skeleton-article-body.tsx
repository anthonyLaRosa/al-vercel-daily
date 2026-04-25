import { Skeleton } from "../atoms/skeleton";

function SkeletonArticleBody() {
  return (
    <article className="flex flex-col gap-8">
      {/* Header */}
      <div className="mx-auto w-full max-w-4xl space-y-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-24 rounded-soft" />
          <Skeleton variant="text" className="w-36" />
        </div>
        <div className="space-y-2">
          <Skeleton variant="text" className="h-8 w-full" />
          <Skeleton variant="text" className="h-8 w-5/6" />
          <Skeleton variant="text" className="h-8 w-3/4" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton variant="circle" className="h-9 w-9" />
          <Skeleton variant="text" className="w-32" />
        </div>
      </div>

      {/* Hero */}
      <Skeleton className="aspect-[16/9] w-full rounded-gallery" />

      {/* Content */}
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton variant="text" className="w-full" />
            <Skeleton variant="text" className="w-full" />
            <Skeleton variant="text" className="w-4/5" />
          </div>
        ))}
      </div>
    </article>
  );
}

export { SkeletonArticleBody };
