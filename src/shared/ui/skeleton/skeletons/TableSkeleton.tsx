import { createArray } from "@shared/utils";

import { Skeleton } from "../components";
import {
  type SkeletonHeight,
  type SkeletonRadius,
  type SkeletonWidth,
} from "../constants";
type TableSkeletonProps = {
  colSpan: number;
  rowNumber?: number;
  width: SkeletonWidth;
  height: SkeletonHeight;
  radius: SkeletonRadius;
};
export const TableSkeleton = ({
  colSpan,
  rowNumber = 10,
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
  return createArray(rowNumber).map((_, index) => (
    <tr key={index} className="border-b border-border-subtle">
      {cols}
    </tr>
  ));
};
