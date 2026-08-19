import { useState } from "react";

import { AvatarSelect } from "@shared/avatar";
import { useLockBodyScroll } from "@shared/overlays";
import { Button, BUTTON_SIZES } from "@shared/ui";
import { User } from "@shared/user";
import { UserProfile } from "@shared/user-profile";
import { Pencil } from "lucide-react";

import { ProfileAvatarSkeleton } from "./ProfileAvatarSkeleton";

export const ProfileCardAvatar = ({ isPending }: { isPending: boolean }) => {
  const { avatar } = User.use();
  const { profile } = UserProfile.use();
  const [isAvatarSelectOpen, setIsAvatarSelectOpen] = useState(false);

  const onCloseAvatarSelect = () => setIsAvatarSelectOpen(false);

  useLockBodyScroll(isAvatarSelectOpen);

  if (isPending) return <ProfileAvatarSkeleton />;

  const { type, value } = avatar.current;
  const renderAvatar =
    type === "image" ? (
      <img src={value} alt="User Avatar" />
    ) : (
      <div className="flex-center h-full w-full">{value}</div>
    );
  return (
    <>
      <div className="flex-center flex-col">
        <div className="group relative flex-center size-20 overflow-hidden rounded-pill border border-border-default bg-bg-subtle text-4xl font-bold text-text-default">
          <Button
            size={BUTTON_SIZES.NONE}
            onClick={() => setIsAvatarSelectOpen(true)}
            fullSize
          >
            {renderAvatar}
          </Button>
          <div
            className={`pointer-events-none absolute inset-0 flex-center bg-bg-overlay/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isAvatarSelectOpen ? "opacity-100" : ""}`}
          />
          <div
            className={`pointer-events-none absolute right-3 bottom-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isAvatarSelectOpen ? "opacity-100" : ""}`}
          >
            <Pencil className="size-5 text-text-on-overlay" />
          </div>
        </div>

        <h1 className="mt-3 text-xl font-bold">{profile.hoTen}</h1>
      </div>
      {isAvatarSelectOpen && <AvatarSelect onClose={onCloseAvatarSelect} />}
    </>
  );
};
