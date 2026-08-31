import {
  SKELETON_HEIGHTS,
  SKELETON_RADIUS,
  SKELETON_WIDTHS,
  TableSkeleton,
} from "@shared/ui";

export const UserCoursesSkeleton = () => {
  return (
    <TableSkeleton
      colSpan={3}
      rowNumber={5}
      width={SKELETON_WIDTHS.MD}
      height={SKELETON_HEIGHTS.MD}
      radius={SKELETON_RADIUS.MD}
    />
  );
};
