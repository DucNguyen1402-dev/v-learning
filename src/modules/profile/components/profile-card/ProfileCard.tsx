import { ProfileCardActions } from "./ProfileCardActions";
import { ProfileCardAvatar } from "./ProfileCardAvatar";
import { ProfileCardInfor } from "./ProfileCardInfor";

export const ProfileCard = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-8 rounded-xl border border-border-subtle bg-bg-default p-6 shadow-surface">
      <ProfileCardAvatar />
      <ProfileCardInfor />
      <ProfileCardActions />
    </div>
  );
};
