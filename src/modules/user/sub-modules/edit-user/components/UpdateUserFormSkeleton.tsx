import { Skeleton, SKELETON_HEIGHTS, SKELETON_WIDTHS } from "@shared/ui";
import { createArray } from "@shared/utils";

export const UpdateUserFormSkeleton = () => {
  return (
    <div className="m w-full max-w-md rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface">
      <div className="flex w-full flex-col gap-12">
        {createArray(4).map((_, index) => (
          <div className="flex flex-col gap-3" key={index}>
            <Skeleton height={SKELETON_HEIGHTS.SM} width={SKELETON_WIDTHS.XS} />
            <Skeleton fullWidth height={SKELETON_HEIGHTS.LG} />
          </div>
        ))}
      </div>

      <div className="mt-25 flex items-center justify-end gap-3">
        <Skeleton height={SKELETON_HEIGHTS.LG} width={SKELETON_WIDTHS.SM} />
        <Skeleton height={SKELETON_HEIGHTS.LG} width={SKELETON_WIDTHS.MD} />
      </div>
    </div>
  );
};
