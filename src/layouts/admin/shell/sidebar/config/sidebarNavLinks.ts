import { Course } from "@shared/icon";
import { Navigation } from "@shared/navigation";
import { Users } from "lucide-react";

import type { NavLink } from "../types";

export const sidebarNavLinks: NavLink[] = [
  // {
  //   path: "/admin/dashboard",
  //   label: "Dashboard",
  //   icon: LayoutDashboard,
  //   iconColor: "text-indigo-500",
  // },
  {
    path: Navigation.admin.paths.ADMIN_COURSES,
    label: "Course management",
    icon: Course,
    iconColor: "text-red-500",
  },
  {
    path: Navigation.admin.paths.ADMIN_USER,
    label: "User management",
    icon: Users,
    iconColor: "text-purple-500",
  },
];
