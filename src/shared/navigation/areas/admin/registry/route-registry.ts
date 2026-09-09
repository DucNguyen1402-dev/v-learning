import {
  addCourseRouteConfig,
  coursesRouteConfig,
} from "@modules/courses/admin/navigation";
import {
  passwordChangeRouteConfig,
  profileChangeRouteConfig,
  profileRouteConfig,
} from "@modules/profile/admin/navigation";
import { addUserRouteConfig, userRouteConfig } from "@modules/user/navigation";
export const ADMIN_ROUTE_KEYS = {
  ...coursesRouteConfig.key,
  ...addCourseRouteConfig.key,
  ...profileRouteConfig.key,
  ...profileChangeRouteConfig.key,
  ...passwordChangeRouteConfig.key,
  ...userRouteConfig.key,
  ...addUserRouteConfig.key,
} as const;

export const ADMIN_ROUTE_TITLES = {
  ...coursesRouteConfig.title,
  ...addCourseRouteConfig.title,
  ...profileRouteConfig.title,
  ...profileChangeRouteConfig.title,
  ...passwordChangeRouteConfig.title,

  ...userRouteConfig.title,
  ...addUserRouteConfig.title,
} as const;

export const ADMIN_ROUTE_PATHS = {
  ...coursesRouteConfig.path,
  ...addCourseRouteConfig.path,
  ...profileRouteConfig.path,
  ...profileChangeRouteConfig.path,
  ...passwordChangeRouteConfig.path,

  ...userRouteConfig.path,
  ...addUserRouteConfig.path,
} as const;
