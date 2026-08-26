// import { Link, NavLink, useNavigate } from "react-router-dom";

// import { useLayoutContext } from "@layouts/admin/contexts";
// // import { clearAuth } from "@shared/utils";
// import { Clapperboard, LayoutDashboard, Users } from "lucide-react";
import { useState } from "react";

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
  // const {
  //   isSidebarOpen,

  //   toggleSidebar,
  // } = useLayoutContext();

  // const navigate = useNavigate();
  // const { storageAvatar, avatarName, account } = auth.use();

  // const onLogoutClick = () => {
  //   clearAuth();
  //   navigate("/login");
  // };

  // const onMenuClick = () => toggleSidebar();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

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
        <SidebarHeader />
        <Separator />
        <SidebarNav isSidebarOpen={isSidebarOpen} />
        <SidebarProfile isSidebarOpen={isSidebarOpen} />
      </div>
    </aside>
  );
};
