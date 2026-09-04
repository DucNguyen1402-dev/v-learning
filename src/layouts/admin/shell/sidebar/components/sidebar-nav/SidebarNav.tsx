import { NavLink } from "react-router-dom";

import { cn } from "@shared/utils";

import { sidebarNavLinks } from "../../config";

type SidebarNavProps = {
  isSidebarOpen: boolean;
};
export const SidebarNav = ({ isSidebarOpen }: SidebarNavProps) => {
  return (
    <nav
      className={cn(
        "sidebar-nav",
        isSidebarOpen ? " " : "sidebar-nav--compact",
      )}
    >
      {sidebarNavLinks.map((link, index) => (
        <NavLink
          to={link.path}
          key={index}
          className={({ isActive }) =>
            cn(`group sidebar-nav-link`, {
              "sidebar-nav-link--active": isActive,
            })
          }
        >
          <link.icon />
          {isSidebarOpen && <span>{link.label}</span>}
        </NavLink>
      ))}
    </nav>
  );
};
