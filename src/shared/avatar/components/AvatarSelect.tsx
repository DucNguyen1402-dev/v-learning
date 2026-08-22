import { Pagination } from "@shared/table";

import { avatarList } from "../config";
import type { Avatar } from "../types";
import { toAvatars } from "../utils";
import { AvatarListRender } from "./AvatarListRender";
import { AvatarSelectCloseButton } from "./AvatarSelectCloseButton";
import { PaginationControlButton } from "./PaginationControlButton";

type AvatarSelectProps = {
  onClose: () => void;
  updateAvatar: (avatar: Avatar) => void;
  currentAvatar: Avatar;
};

export const AvatarSelect = ({
  onClose,
  updateAvatar,
  currentAvatar,
}: AvatarSelectProps) => {
  const handleAvatarSelection = (avatar: Avatar) => {
    updateAvatar(avatar);
    onClose();
  };
  const isMobile = window.innerWidth < 640;

  return (
    <Pagination.Provider
      items={toAvatars(avatarList)}
      pageSize={isMobile ? 3 : 7}
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
