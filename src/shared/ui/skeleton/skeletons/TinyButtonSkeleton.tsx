import { Skeleton } from "../components";
import { SKELETON_HEIGHTS, SKELETON_WIDTHS } from "../constants";

export const TinyButtonSkeleton = () => (
  <Skeleton height={SKELETON_HEIGHTS.LG} width={SKELETON_WIDTHS["2XS"]} />
);
