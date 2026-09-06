import { ProfileCardAvatar } from "./profile-avatar";
import { ProfileCardInfor } from "./profile-infor";
import { ProfileCardActions } from "./ProfileCardActions";

import { useUserInforQuery } from "@/shared/auth";

export const ProfileCard = () => {
  const { infor, isPending } = useUserInforQuery();

  return (
    <div className="flex w-full max-w-md flex-col gap-8 rounded-xl border border-border-subtle bg-bg-default p-6 pb-3 shadow-surface select-none">
      <ProfileCardAvatar isPending={isPending} />
      <ProfileCardInfor infor={infor} />
      <div className="mt-6">
        <ProfileCardActions isPending={isPending} />
      </div>
    </div>
  );
};
