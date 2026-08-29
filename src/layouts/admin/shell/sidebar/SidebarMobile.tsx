import { NavLink } from "react-router-dom";

import { UserAvatar } from "@layouts/shared/components";
import { EducationLogo } from "@shared/logo";

import { sidebarNavLinks } from "./config";

import { cn } from "@/shared/utils/style";
export const SidebarMobile = () => {
  return (
    <aside>
      <div className="group/outer flex h-20 items-center justify-between px-2 md:px-4">
        <EducationLogo />
        <div className="flex gap-4 md:gap-8">
          {sidebarNavLinks.map((link) => (
            <NavLink
              to={link.path}
              key={link.path}
              className={({ isActive }) =>
                cn(`group nav-link`, {
                  "nav-link--active": isActive,
                })
              }
            >
              <link.icon className="size-6" />
            </NavLink>
          ))}
        </div>
        <div>
          <UserAvatar enabledProfileLink={true} />
        </div>
      </div>
    </aside>
  );
};
