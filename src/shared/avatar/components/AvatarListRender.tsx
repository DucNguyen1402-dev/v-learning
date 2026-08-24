import { Pagination } from "@shared/table";
import { Button, BUTTON_SIZES } from "@shared/ui";

import type { Avatar } from "../types";
import { getUserInitialAvatar } from "../utils";
import { AvatarButtonSelected } from "./AvatarButtonSelected";

type AvatarListRenderProps = {
  handleAvatarSelection: (avatar: Avatar) => void;
  currentAvatar: Avatar;
};
export const AvatarListRender = ({
  handleAvatarSelection,
  currentAvatar,
}: AvatarListRenderProps) => {
  const pagination = Pagination.use<Avatar>();

  const initialAvatar = getUserInitialAvatar();

  return (
    <>
      {pagination.state.currentPage === 1 && (
        <div className="avatar-option-container">
          <Button
            onClick={() => handleAvatarSelection(initialAvatar)}
            size={BUTTON_SIZES.NONE}
          >
            <div className="avatar-option--initial">{initialAvatar.value}</div>
            {initialAvatar.value === currentAvatar.value && (
              <AvatarButtonSelected />
            )}
          </Button>
        </div>
      )}
      {pagination.state.paginatedList.map((avatar) => (
        <div className="avatar-option-container" key={avatar.value}>
          <Button
            key={avatar.value}
            size={BUTTON_SIZES.NONE}
            onClick={() =>
              handleAvatarSelection({ type: "image", value: avatar.value })
            }
          >
            <img
              src={avatar.value}
              alt="avatar"
              className="avatar-option--image"
            />
            {avatar.value === currentAvatar.value && <AvatarButtonSelected />}
          </Button>
        </div>
      ))}
    </>
  );
};
