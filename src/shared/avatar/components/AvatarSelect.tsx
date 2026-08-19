import { Pagination } from "@shared/table";
import { User } from "@shared/user";

import { avatarList } from "../config";
import type { Avatar } from "../types";
import { AvatarListRender } from "./AvatarListRender";
import { AvatarSelectCloseButton } from "./AvatarSelectCloseButton";
import { PaginationControlButton } from "./PaginationControlButton";

type AvatarSelectProps = {
  onClose: () => void;
};

export const AvatarSelect = ({ onClose }: AvatarSelectProps) => {
  const { avatar } = User.use();

  const { current: currentAvatar, update: UpdateAvatar } = avatar;

  const handleAvatarSelection = (avatar: Avatar) => {
    UpdateAvatar(avatar);
    onClose();
  };

  return (
    <Pagination.Provider
      items={avatarList}
      pageSize={7}
      resetDeps={[avatarList]}
    >
      <div className="avatar-select-position">
        <div className="avatar-select-container">
          <AvatarListRender
            handleAvatarSelection={handleAvatarSelection}
            currentAvatar={currentAvatar}
          />
          <PaginationControlButton />

          <div className="absolute top-1.5 right-1.5">
            <AvatarSelectCloseButton onClose={onClose} />
          </div>
        </div>
      </div>
    </Pagination.Provider>
  );
};
