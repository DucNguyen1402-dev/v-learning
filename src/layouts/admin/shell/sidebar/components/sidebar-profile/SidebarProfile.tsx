import { ProfileDropdown, UserAvatar } from "@layouts/shared/components";
import { Separator, SeparatorConfig } from "@shared/ui";
import { cn } from "@shared/utils";

import { UserAccount } from "./UserAccount";

type SidebarProfileProps = {
  isSidebarOpen: boolean;
};
export const SidebarProfile = ({ isSidebarOpen }: SidebarProfileProps) => {
  return (
    <div>
      {isSidebarOpen && <Separator intent={SeparatorConfig.intents.PRIMARY} />}
      <div
        className={cn("profile-menu group relative", {
          "profile-menu--sidebar-colapsed": !isSidebarOpen,
        })}
      >
        {isSidebarOpen && (
          <div className="dropdown-container dropdown-position-up">
            <ProfileDropdown />
          </div>
        )}

        <UserAvatar enabledProfileLink={!isSidebarOpen} />
        {isSidebarOpen && <UserAccount />}
      </div>
    </div>
  );
};
