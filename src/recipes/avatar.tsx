import { AVATAR_SIZES, AvatarSkeleton } from "@shared/ui";

export const Playground = () => {
  return (
    <div className="flex-center min-h-screen w-full border-2 border-red-500">
      <AvatarSkeleton size={AVATAR_SIZES["4XL"]} />
    </div>
  );
};
