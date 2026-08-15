import { skeletonHeights, skeletonRadius, skeletonWidths } from "../config";
import {
  SKELETON_HEIGHTS,
  SKELETON_RADIUS,
  SKELETON_WIDTHS,
  type SkeletonHeight,
  type SkeletonRadius,
  type SkeletonWidth,
} from "../constants";

type SkeletonProps = {
  width?: SkeletonWidth;
  height?: SkeletonHeight;
  radius?: SkeletonRadius;
};

export function Skeleton({
  width = SKELETON_WIDTHS.MD,
  height = SKELETON_HEIGHTS.MD,
  radius = SKELETON_RADIUS.MD,
}: SkeletonProps) {
  const skeletonStyle = {
    width: skeletonWidths[width],
    height: skeletonHeights[height],
    borderRadius: skeletonRadius[radius],
  };

  return <div className="skeleton" style={skeletonStyle} />;
}
