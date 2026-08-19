import { Skeleton, SKELETON_HEIGHTS, SKELETON_WIDTHS } from "@shared/ui";
import { createArray } from "@shared/utils";
export const ProfileCardInforSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 text-[13px]">
      {createArray(3).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-t border-border-subtle pt-3 text-text-subtle"
        >
          <Skeleton width={SKELETON_WIDTHS.XS} height={SKELETON_HEIGHTS.MD} />
          <Skeleton width={SKELETON_WIDTHS.MD} height={SKELETON_HEIGHTS.MD} />
        </div>
      ))}
    </div>
  );
};
