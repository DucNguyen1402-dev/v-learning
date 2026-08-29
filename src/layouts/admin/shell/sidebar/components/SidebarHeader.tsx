import { EducationLogo } from "@shared/logo";
import { cn } from "@shared/utils";

type SidebarHeaderProps = {
  isSidebarOpen: boolean;
};
export const SidebarHeader = ({ isSidebarOpen }: SidebarHeaderProps) => {
  return (
    <div
      className={cn("sidebar-header", {
        "sidebar-header--closed": !isSidebarOpen,
      })}
    >
      <EducationLogo />
      <div className="sidebar-header__content">
        <h1 className="sidebar-header__title">V-LEARNING</h1>
        <p className="sidebar-header__subtitle">Admin Panel</p>
      </div>
    </div>
  );
};
