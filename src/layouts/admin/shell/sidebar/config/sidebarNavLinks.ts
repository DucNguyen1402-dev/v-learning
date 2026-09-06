import { Navigation } from "@shared/navigation";
import { BookOpen, Users } from "lucide-react";

import type { NavLink } from "../types";

export const sidebarNavLinks: NavLink[] = [
  {
    path: Navigation.admin.paths.ADMIN_COURSES,
    label: "Course management",
    icon: BookOpen,
    iconColor: "text-red-500",
  },
  {
    path: Navigation.admin.paths.ADMIN_USER,
    label: "User management",
    icon: Users,
    iconColor: "text-purple-500",
  },
];
