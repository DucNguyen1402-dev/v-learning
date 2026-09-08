import { Skeleton } from "../../components";
import { SKELETON_RADIUS } from "../../constants";
import { avatarSizes } from "./config";
import { AVATAR_SIZES, type AvatarSize } from "./constants";

type AvatarSkeletonProps = {
  size?: AvatarSize;
};
export const AvatarSkeleton = ({
  size = AVATAR_SIZES.MD,
}: AvatarSkeletonProps) => {
  return (
    <div className="flex justify-center">
      <Skeleton
        size={{ width: avatarSizes[size], height: avatarSizes[size] }}
        radius={SKELETON_RADIUS.FULL}
      />
    </div>
  );
};
