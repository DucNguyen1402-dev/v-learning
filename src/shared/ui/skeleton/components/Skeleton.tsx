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
  fullWidth?: boolean;
};

export function Skeleton({
  width = SKELETON_WIDTHS.MD,
  height,
  radius = SKELETON_RADIUS.MD,
  fullWidth = false,
  size,
}: SkeletonProps) {
  const computedWidth = fullWidth ? "100%" : skeletonWidths[width];
  const skeletonStyle = {
    width: computedWidth,
    height: height ? skeletonHeights[height] : computedWidth,
    borderRadius: skeletonRadius[radius],
    ...size,
  };

  return <div className="skeleton" style={skeletonStyle} />;
}
