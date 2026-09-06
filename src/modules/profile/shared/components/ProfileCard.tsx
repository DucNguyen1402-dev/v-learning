import { ProfileCardAvatar } from "./profile-avatar";
import { ProfileCardInfor } from "./profile-infor";
import { ProfileCardActions } from "./ProfileCardActions";

import { useCurrentUserQuery } from "@/shared/current-user";

export const ProfileCard = () => {
  const { currentUser, isPending } = useCurrentUserQuery();

  return (
    <div className="flex w-full max-w-md flex-col gap-8 rounded-xl border border-border-subtle bg-bg-default p-6 pb-3 shadow-surface select-none">
      <ProfileCardAvatar isPending={isPending} />
      <ProfileCardInfor currentUser={currentUser} />
      <div className="mt-6">
        <ProfileCardActions isPending={isPending} />
      </div>
    </div>
  );
};
