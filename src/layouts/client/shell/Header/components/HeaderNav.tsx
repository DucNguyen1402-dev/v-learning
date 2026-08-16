import { NavLink } from "react-router-dom";

import { Navigation } from "@shared/navigation";
import { cn } from "@shared/utils";

export const HeaderNav = () => {
  const navLinks = [
    { label: "Home", routeKey: Navigation.client.paths.HOME },
    { label: "Khóa học", routeKey: Navigation.client.paths.COURSES },
    { label: "Blogs", routeKey: Navigation.client.paths.BLOGS },
    { label: "Giới thiệu", routeKey: Navigation.client.paths.ABOUT },
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
