import {
  SKELETON_HEIGHTS,
  SKELETON_RADIUS,
  SKELETON_WIDTHS,
  TableSkeleton,
} from "@shared/ui";

export const CourseTableSkeleton = () => {
  return (
    <TableSkeleton
      colSpan={8}

      width={SKELETON_WIDTHS.LG}
      height={SKELETON_HEIGHTS.LG}
      radius={SKELETON_RADIUS.MD}
    />
  );
};
