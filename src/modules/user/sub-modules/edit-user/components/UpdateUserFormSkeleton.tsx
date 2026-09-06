import { Skeleton, SKELETON_HEIGHTS, SKELETON_WIDTHS } from "@shared/ui";
import { createArray } from "@shared/utils";

export const UpdateUserFormSkeleton = () => {
  return (
    <div className="w-full rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface">
      <div className="flex w-full flex-col gap-8">
        {createArray(4).map((_, index) => (
          <div className="flex flex-col gap-3">
            <Skeleton
              key={index}
              height={SKELETON_HEIGHTS.SM}
              width={SKELETON_WIDTHS.XS}
            />
            <Skeleton key={index} fullWidth height={SKELETON_HEIGHTS.LG} />
          </div>
        ))}
      </div>

      <div className="mt-20 flex items-center justify-end gap-3">
        <Skeleton height={SKELETON_HEIGHTS.LG} width={SKELETON_WIDTHS.SM} />
        <Skeleton height={SKELETON_HEIGHTS.LG} width={SKELETON_WIDTHS.MD} />
      </div>
    </div>
  );
};
