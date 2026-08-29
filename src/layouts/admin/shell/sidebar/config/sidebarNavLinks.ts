import { Course } from "@shared/icon";
import { LayoutDashboard, Users } from "lucide-react";

import type { NavLink } from "../types";

export const sidebarNavLinks: NavLink[] = [
  {
    path: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    iconColor: "text-indigo-500",
  },
  {
    path: "/admin/courses",
    label: "Course management",
    icon: Course,
    iconColor: "text-red-500",
  },
  {
    path: "/admin/users",
    label: "User management",
    icon: Users,
    iconColor: "text-purple-500",
  },
];
