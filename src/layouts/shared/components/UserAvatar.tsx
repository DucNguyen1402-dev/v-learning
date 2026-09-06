import { Navigation } from "@shared/navigation";
import { cn } from "@shared/utils";

import { UserPreferences } from "@/shared/current-user";
type UserAvatarProps = {
  enabledProfileLink?: boolean;
};
export const UserAvatar = ({ enabledProfileLink = false }: UserAvatarProps) => {
  const { avatar } = UserPreferences.use();
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
      <Navigation.components.Go
        routeKey={profileKey}
        className={cn("profile-avatar", {
          "profile-avatar--initial": type !== "image",
        })}
      >
        {avatarRender}
      </Navigation.components.Go>
    </div>
  );
};
