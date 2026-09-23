import { Skeleton, SKELETON_HEIGHTS, SKELETON_WIDTHS } from "@shared/ui";

export const FeatureCourseCardSkeleton = () => (
  <article className="flex flex-col justify-between rounded-container border border-border-default bg-bg-default p-4 select-none md:p-6">
    <div className="flex flex-col gap-6">
      <Skeleton width={SKELETON_WIDTHS.SM} height={SKELETON_HEIGHTS.SM} />

      <div className="flex gap-2">
        <Skeleton size={{ width: "9rem", height: "8rem" }} />
        <div className="flex-1">
          <Skeleton size={{ height: "5rem" }} fullWidth />
        </div>
      </div>
    </div>

    <div className="my-6 border-t border-border-subtle" />

    <div className="flex items-center justify-between">
      <Skeleton width={SKELETON_WIDTHS.SM} height={SKELETON_HEIGHTS.SM} />
      <Skeleton width={SKELETON_WIDTHS.SM} height={SKELETON_HEIGHTS.SM} />
    </div>
  </article>
);
