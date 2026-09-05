import { NavLink } from "react-router-dom";

import { CurrentUserStorage } from "@shared/auth";
import { Navigation } from "@shared/navigation";
import { cn } from "@shared/utils";

export const HeaderNav = () => {
  const currentUser = CurrentUserStorage.tryGet();
  const navLinks = [
    { label: "Home", url: Navigation.client.urls.CLIENT_HOME, isVisible: true },
    {
      label: "Khóa học",
      url: Navigation.client.urls.CLIENT_COURSES,
      isVisible: true,
    },
    {
      label: "Blogs",
      url: Navigation.client.urls.CLIENT_BLOGS,
      isVisible: true,
    },
    {
      label: "Giới thiệu",
      url: Navigation.client.urls.CLIENT_ABOUT,
      isVisible: !currentUser,
    },
    {
      label: "Khóa học của tôi",
      url: Navigation.client.urls.CLIENT_PERSONAL_COURSE,
      isVisible: !!currentUser,
    },
  ];

  return (
    <nav className="hidden items-center gap-8 md:flex lg:gap-10">
      {navLinks
        .filter((link) => link.isVisible)
        .map((link) => {
          return (
            <NavLink
              key={link.url}
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
