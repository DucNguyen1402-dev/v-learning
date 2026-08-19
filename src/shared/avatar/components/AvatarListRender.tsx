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
  const pagination = Pagination.use();

  const initialAvatar = getUserInitialAvatar();

  return (
    <>
      {pagination.state.page !== 1 && (
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
      {pagination.state.paginatedList.map((avatar: string) => (
        <div className="avatar-option-container">
          <Button
            key={avatar}
            size={BUTTON_SIZES.NONE}
            onClick={() =>
              handleAvatarSelection({ type: "image", value: avatar })
            }
          >
            <img src={avatar} alt="avatar" className="avatar-option--image" />
            {avatar === currentAvatar.value && <AvatarButtonSelected />}
          </Button>
        </div>
      ))}
    </>
  );
};
