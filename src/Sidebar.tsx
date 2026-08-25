import { Link, NavLink, useNavigate } from "react-router-dom";

import { useLayoutContext } from "@layouts/admin/contexts";
// import { clearAuth } from "@shared/utils";
import { Clapperboard, LayoutDashboard, Users } from "lucide-react";

import {
  SidebarHeader,
  SidebarNav,
  SidebarNavCompact,
  SidebarProfile,
  SidebarProfileCompact,
  SidebarToggleButton,
} from "./components";

// import { auth } from "@features/admin";

const SIDEBAR_LINKS = [
  {
    path: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    iconColor: "text-indigo-500",
  },
  {
    path: "/admin/movies",
    label: "Movie management",
    icon: Clapperboard,
    iconColor: "text-red-500",
  },
  {
    path: "/admin/users",
    label: "User management",
    icon: Users,
    iconColor: "text-purple-500",
  },
];

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

  const isSidebarOpen = true;

  return (
    <aside
      className={`group/outer fixed z-20 flex h-full w-64 transform-gpu flex-col border-r border-gray-800 bg-[#1e1e1e] transition-transform duration-300 ease-in-out will-change-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-4/5"}`}
    >
      <SidebarToggleButton />
      <SidebarHeader />
      <SidebarNav />
      <SidebarProfile />
      <SidebarNavCompact />
      <SidebarProfileCompact />
    </aside>
  );
};
