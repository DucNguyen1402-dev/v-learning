import { Skeleton, SKELETON_HEIGHTS, SKELETON_WIDTHS } from "@shared/ui";

export const CoursesListSkeleton = () => (
  <article className="flex h-140 flex-col overflow-hidden rounded-container border border-border-default bg-bg-default shadow-surface select-none">
    <Skeleton fullWidth />
    <div className="flex flex-1 flex-col gap-5 p-4">
      <div className="flex flex-col gap-2">
        <Skeleton width={SKELETON_WIDTHS.SM} height={SKELETON_HEIGHTS.MD} />

        <Skeleton fullWidth height={SKELETON_HEIGHTS.MD} />
      </div>

      <Skeleton fullWidth height={SKELETON_HEIGHTS["2XL"]} />

      <div className="mt-2 flex flex-wrap gap-6 text-sm text-text-subtle">
        <div className="flex items-center gap-1">
          <Skeleton width={SKELETON_WIDTHS.XS} height={SKELETON_HEIGHTS.SM} />
          <Skeleton width={SKELETON_WIDTHS.XS} height={SKELETON_HEIGHTS.SM} />
        </div>
        <div className="flex items-center gap-1">
          <Skeleton width={SKELETON_WIDTHS.XS} height={SKELETON_HEIGHTS.SM} />
          <Skeleton width={SKELETON_WIDTHS.XS} height={SKELETON_HEIGHTS.SM} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-1 border-t border-border-subtle pt-4 text-sm">
        <Skeleton width={SKELETON_WIDTHS.SM} height={SKELETON_HEIGHTS.SM} />
        <Skeleton width={SKELETON_WIDTHS.SM} height={SKELETON_HEIGHTS.SM} />
      </div>
      <div className="py-2">
        <Skeleton fullWidth height={SKELETON_HEIGHTS.LG} />
      </div>
    </div>
  </article>
);
