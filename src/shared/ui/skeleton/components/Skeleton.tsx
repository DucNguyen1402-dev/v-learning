import { skeletonHeights, skeletonRadius, skeletonWidths } from "../config";
import {
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
  size?: {
    width?: string;
    height?: string;
  };
};

export function Skeleton({
  width = SKELETON_WIDTHS.MD,
  height,
  radius = SKELETON_RADIUS.MD,
  size,
}: SkeletonProps) {
  const skeletonStyle = {
    width: skeletonWidths[width],
    height: height ? skeletonHeights[height] : skeletonWidths[width],
    borderRadius: skeletonRadius[radius],
    ...size,
  };

  return <div className="skeleton" style={skeletonStyle} />;
}
