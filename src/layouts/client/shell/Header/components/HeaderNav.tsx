import { NavLink } from "react-router-dom";

import { AppRoutes } from "@routes";
import { cn } from "@shared/utils";

export const HeaderNav = () => {
  const navLinks = [
    { label: "Home", routeKey: AppRoutes.client.paths.HOME },
    { label: "Khóa học", routeKey: AppRoutes.client.paths.COURSES },
    { label: "Blogs", routeKey: AppRoutes.client.paths.BLOGS },
    { label: "Giới thiệu", routeKey: AppRoutes.client.paths.ABOUT },
  ];

  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-10">
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.routeKey}
            to={link.routeKey}
            className={({ isActive }) =>
              cn("nav-link", isActive && "nav-link-active")
            }
          >
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
};
