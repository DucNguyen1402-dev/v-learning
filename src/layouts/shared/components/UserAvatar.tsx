import { Navigation } from "@shared/navigation";
import { cn } from "@shared/utils";

import { User } from "@/shared/user/User";
type UserAvatarProps = {
  enabledProfileLink?: boolean;
};
export const UserAvatar = ({ enabledProfileLink = false }: UserAvatarProps) => {
  const { avatar } = User.use();
  const { type, value } = avatar.current;
  const avatarRender =
    type === "image" ? <img src={value} alt="user avatar" /> : value;

  const currentArea = Navigation.hooks.useCurrentArea();
  const profileKey = Navigation[currentArea].keys.PROFILE;
  return (
    <div
      className={
        enabledProfileLink ? "" : "lg:pointer-events-none lg:cursor-default"
      }
    >
      <Navigation.components.Forward
        routeKey={profileKey}
        className={cn("profile-avatar", {
          "profile-avatar--initial": type !== "image",
        })}
      >
        {avatarRender}
      </Navigation.components.Forward>
    </div>
  );
};
