// import { Link, NavLink, useNavigate } from "react-router-dom";

// // import { clearAuth } from "@shared/utils";
// import { Clapperboard, LayoutDashboard, Users } from "lucide-react";

import { useLayoutContext } from "@layouts/admin/contexts";
import { Navigation } from "@shared/navigation";
import { Separator } from "@shared/ui";
import { cn } from "@shared/utils";

import {
  SidebarHeader,
  SidebarNav,
  SidebarProfile,
  SidebarToggleButton,
} from "./components";

// import { auth } from "@features/admin";

export const Sidebar = () => {
  const {
    isSidebarOpen,

    toggleSidebar,
  } = useLayoutContext();

  // const navigate = useNavigate();
  // const { storageAvatar, avatarName, account } = auth.use();

  // const onLogoutClick = () => {
  //   clearAuth();
  //   navigate("/login");
  // };

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
        <Navigation.components.Go
          className={`button-base button-primary solid rounded-control-sm py-1 transition-opacity duration-150 ${isSidebarOpen ? "" : "opacity-0"}`}
          routeKey={Navigation.client.keys.HOME}
          area="client"
        >
          <div className="flex-center text-sm">
            <span>Trang chủ</span>
          </div>
        </Navigation.components.Go>
        {isSidebarOpen && <Separator />}
        <SidebarNav isSidebarOpen={isSidebarOpen} />
        <SidebarProfile isSidebarOpen={isSidebarOpen} />
      </div>
    </aside>
  );
};
