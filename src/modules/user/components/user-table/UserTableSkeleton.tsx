import {
  SKELETON_HEIGHTS,
  SKELETON_RADIUS,
  SKELETON_WIDTHS,
  TableSkeleton,
} from "@shared/ui";

type UserTableSkeletonProps = {
  colSpan: number;
};
export const UserTableSkeleton = ({ colSpan }: UserTableSkeletonProps) => {
  return (
    <TableSkeleton
      colSpan={colSpan}

      width={SKELETON_WIDTHS.LG}
      height={SKELETON_HEIGHTS.LG}
      radius={SKELETON_RADIUS.MD}
    />
  );
};
