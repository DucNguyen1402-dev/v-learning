import { Skeleton } from "../components";
import {
  type SkeletonHeight,
  type SkeletonRadius,
  type SkeletonWidth,
} from "../constants";

type TableSkeletonProps = {
  colSpan: number;
  width: SkeletonWidth;
  height: SkeletonHeight;
  radius: SkeletonRadius;
};
export const TableSkeleton = ({
  colSpan,
  width,
  height,
  radius,
}: TableSkeletonProps) => {
  const cols = Array.from({ length: colSpan }, (_, index) => (
    <td key={index} className="p-4">
      <div className="flex justify-center">
        <Skeleton width={width} height={height} radius={radius} />
      </div>
    </td>
  ));
  return <tr>{cols}</tr>;
};
