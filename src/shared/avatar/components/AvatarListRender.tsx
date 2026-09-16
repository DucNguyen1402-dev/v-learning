import { useState } from "react";

import { Pagination } from "@shared/table";
import { Button, BUTTON_SIZES, Skeleton, SKELETON_RADIUS } from "@shared/ui";

import type { Avatar } from "../types";
import { getUserInitialAvatar } from "../utils";
import { AvatarButtonSelected } from "./AvatarButtonSelected";

type AvatarListRenderProps = {
  handleAvatarSelection: (avatar: Avatar) => void;
  currentAvatar: Avatar;
};

type AvatarImageOptionProps = {
  avatar: Avatar;
  isSelected: boolean;
  onSelect: () => void;
};

const AvatarImageOption = ({
  avatar,
  isSelected,
  onSelect,
}: AvatarImageOptionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="avatar-option-container">
      <Button size={BUTTON_SIZES.NONE} onClick={onSelect}>
        <div className="avatar-option--image-wrapper">
          <img
            src={avatar.value}
            alt="avatar"
            className={`avatar-option--image${isLoaded ? "" : "avatar-option--image-loading"}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <Skeleton
              size={{ width: "100%", height: "100%" }}
              radius={SKELETON_RADIUS.FULL}
            />
          )}
        </div>
        {isSelected && <AvatarButtonSelected />}
      </Button>
    </div>
  );
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
        <AvatarImageOption
          key={avatar.value}
          avatar={avatar}
          isSelected={avatar.value === currentAvatar.value}
          onSelect={() =>
            handleAvatarSelection({ type: "image", value: avatar.value })
          }
        />
      ))}
    </>
  );
};
