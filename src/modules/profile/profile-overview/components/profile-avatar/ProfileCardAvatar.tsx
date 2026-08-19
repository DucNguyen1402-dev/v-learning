import { User } from "@shared/user";
import { UserProfile } from "@shared/user-profile";

import { ProfileAvatarSkeleton } from "./ProfileAvatarSkeleton";

export const ProfileCardAvatar = ({ isPending }: { isPending: boolean }) => {
  const { avatar } = User.use();
  const { profile } = UserProfile.use();

  if (isPending) return <ProfileAvatarSkeleton />;
  const { type, value } = avatar.current;
  const renderAvatar =
    type === "image" ? <img src={value} alt="User Avatar" /> : value;
  return (
    <div className="flex-center flex-col">
      <div className="flex-center size-20 rounded-pill border border-border-default bg-bg-subtle text-3xl font-bold text-text-subtle">
        {renderAvatar}
      </div>
      <h1 className="mt-3 text-xl font-bold">{profile.hoTen}</h1>
    </div>
  );
};
