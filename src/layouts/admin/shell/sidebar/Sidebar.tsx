import { useLayoutContext } from "@layouts/admin/contexts";
import { Separator } from "@shared/ui";
import { cn } from "@shared/utils";

import {
  SidebarHeader,
  SidebarNav,
  SidebarProfile,
  SidebarToggleButton,
} from "./components";

export const Sidebar = () => {
  const {
    isSidebarOpen,

    toggleSidebar,
  } = useLayoutContext();

  return (
    <aside
      className={cn("group/outer sidebar-position", {
        "sidebar-closed": !isSidebarOpen,
      })}
    >
      <div
        className={cn("sidebar-container", {
          "sidebar-container--compact": !isSidebarOpen,
        })}
      >
        <SidebarToggleButton
          onClick={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarHeader isSidebarOpen={isSidebarOpen} />

        {isSidebarOpen && <Separator />}
        <SidebarNav isSidebarOpen={isSidebarOpen} />
        <SidebarProfile isSidebarOpen={isSidebarOpen} />
      </div>
    </aside>
  );
};
