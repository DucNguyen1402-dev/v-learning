import {
  SKELETON_HEIGHTS,
  SKELETON_RADIUS,
  SKELETON_WIDTHS,
  TableSkeleton,
} from "@shared/ui";

type EnrollmentSkeletonProps = {
  colSpan?: number;
  rowNumber?: number;
};
export const EnrollmentSkeleton = ({
  colSpan = 4,
  rowNumber = 5,
}: EnrollmentSkeletonProps) => {
  return (
    <TableSkeleton
      colSpan={colSpan}
      rowNumber={rowNumber}
      width={SKELETON_WIDTHS.MD}
      height={SKELETON_HEIGHTS.MD}
      radius={SKELETON_RADIUS.MD}
    />
  );
};
