import { Navigation } from "@shared/navigation";
import { cn } from "@shared/utils";

import { User } from "@/shared/user/User";
export const UserAvatar = () => {
  const { avatar } = User.use();
  const { type, value } = avatar.current;
  const avatarRender =
    type === "image" ? <img src={value} alt="user avatar" /> : value;

  return (
    <div className="lg:pointer-events-none lg:cursor-default">
      <Navigation.components.Forward
        routeKey={Navigation.client.keys.PROFILE}
        className={cn("profile-avatar", {
          "profile-avatar--initial": type !== "image",
        })}
      >
        {avatarRender}
      </Navigation.components.Forward>
    </div>
  );
};
