import {
  Skeleton,
  SKELETON_HEIGHTS,
  SKELETON_RADIUS,
  SKELETON_WIDTHS,
} from "@shared/ui";

export const ProfileAvatarSkeleton = () => (
  <div className="flex-center flex-col">
    <div className="flex-center size-20 overflow-hidden rounded-pill border border-border-default bg-bg-subtle text-3xl font-bold text-text-subtle">
      <Skeleton width={SKELETON_WIDTHS.SM} radius={SKELETON_RADIUS.FULL} />
    </div>
    <h1 className="mt-3 text-xl font-bold">
      <Skeleton width={SKELETON_WIDTHS.MD} height={SKELETON_HEIGHTS.MD} />
    </h1>
  </div>
);
