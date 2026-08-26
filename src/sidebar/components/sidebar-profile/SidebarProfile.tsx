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
        className={cn("sidebar-profile group relative", {
          "sidebar-profile--sidebar-closed": !isSidebarOpen,
        })}
      >
        <div className="pointer-events-none absolute bottom-10 left-0 opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100">
          <ProfileDropdown />
        </div>

        <UserAvatar />
        <UserAccount />
      </div>
    </div>
  );
};
