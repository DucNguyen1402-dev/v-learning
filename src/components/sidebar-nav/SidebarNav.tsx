import { NavLink } from "react-router-dom";

import { Clapperboard, LayoutDashboard, Users } from "lucide-react";
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
export const SidebarNav = () => {
  const isSidebarOpen = true;
  const navLinkClasses = ` group flex items-center space-x-3 px-2.5 py-2.5 rounded-lg font-medium transition-colors duration-500`;
  return (
    <nav
      className={`mt-5 flex-1 space-y-6 px-4 py-6 transition-opacity duration-300 ease-in-out ${isSidebarOpen ? "" : "opacity-0"}`}
    >
      {SIDEBAR_LINKS.map((link) => (
        <NavLink
          to={link.path}
          key={link.path}
          className={({ isActive }) =>
            `${navLinkClasses} ${
              isActive
                ? "bg-rose-600 text-white"
                : "transition-colors duration-300 hover:bg-rose-400 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <link.icon
                className={
                  isActive
                    ? "text-white"
                    : `${link.iconColor} transition-colors duration-500 group-hover:text-white`
                }
              />
              <span>{link.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
