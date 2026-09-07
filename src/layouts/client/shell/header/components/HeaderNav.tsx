import { NavLink } from "react-router-dom";

import { CurrentUser } from "@shared/current-user";
import { Navigation } from "@shared/navigation";
import { cn } from "@shared/utils";

export const HeaderNav = () => {
  const { hasCurrentUser } = CurrentUser.use();
  const navLinks = [
    {
      label: "Home",
      url: Navigation.client.paths.CLIENT_HOME,
      isVisible: true,
    },
    {
      label: "Khóa học",
      url: Navigation.client.paths.CLIENT_COURSES,
      isVisible: true,
    },
    {
      label: "Blogs",
      url: Navigation.client.paths.CLIENT_BLOGS,
      isVisible: true,
    },
    {
      label: "Giới thiệu",
      url: Navigation.client.paths.CLIENT_ABOUT,
      isVisible: !hasCurrentUser,
    },
    {
      label: "Khóa học của tôi",
      url: Navigation.client.paths.CLIENT_PERSONAL_COURSES,
      isVisible: hasCurrentUser,
    },
  ];

  return (
    <nav className="hidden items-center gap-8 md:flex lg:gap-10">
      {navLinks
        .filter((link) => link.isVisible)
        .map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.url}
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
