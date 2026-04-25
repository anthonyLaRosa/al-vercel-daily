import { Skeleton } from "../atoms/skeleton";

function SkeletonFooterSocial() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-9 w-9 rounded-soft" />
      ))}
    </>
  );
}

export { SkeletonFooterSocial };
