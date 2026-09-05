import {
  addCourseRouteConfig,
  courseEnrollmentRouteConfig,
  coursesRouteConfig,
  editCourseBuilderRouteConfig,
  enrollUserRouteConfig,
} from "@modules/courses/admin";
import {
  passwordChangeRouteConfig,
  profileChangeRouteConfig,
  profileRouteConfig,
} from "@modules/profile/admin";
import {
  addUserRouteConfig,
  editUserRouteConfig,
  userCourseRouteConfig,
  userRouteConfig,
} from "@modules/user";
export const ADMIN_ROUTE_KEYS = {
  ...coursesRouteConfig.key,
  ...addCourseRouteConfig.key,
  ...profileRouteConfig.key,
  ...profileChangeRouteConfig.key,
  ...passwordChangeRouteConfig.key,
  ...userRouteConfig.key,
  ...addUserRouteConfig.key,
} as const;

export type AdminRouteKey =
  (typeof ADMIN_ROUTE_KEYS)[keyof typeof ADMIN_ROUTE_KEYS];

export const adminRouteKeys = Object.values(
  ADMIN_ROUTE_KEYS,
) as AdminRouteKey[];

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

/*======================================================================================== builder route keys */
export const ADMIN_BUILDER_ROUTE_KEYS = {
  ...editCourseBuilderRouteConfig.builderKey,
  ...courseEnrollmentRouteConfig.builderKey,
  ...enrollUserRouteConfig.builderKey,

  ...editUserRouteConfig.builderKey,
  ...userCourseRouteConfig.builderKey,
} as const;

export type AdminRouteBuilderKey =
  (typeof ADMIN_BUILDER_ROUTE_KEYS)[keyof typeof ADMIN_BUILDER_ROUTE_KEYS];

export const adminRouteBuilderKeys = Object.values(
  ADMIN_BUILDER_ROUTE_KEYS,
) as AdminRouteBuilderKey[];

export const ADMIN_BUILDER_ROUTE_TITLES = {
  ...editCourseBuilderRouteConfig.title,
  ...courseEnrollmentRouteConfig.title,
  ...enrollUserRouteConfig.title,
  ...editUserRouteConfig.title,
  ...userCourseRouteConfig.title,
} as const;

export const ADMIN_BUILDER_ROUTE_PATHS = {
  ...editCourseBuilderRouteConfig.pathBuilder,
  ...courseEnrollmentRouteConfig.pathBuilder,
  ...enrollUserRouteConfig.pathBuilder,
  ...editUserRouteConfig.pathBuilder,
  ...userCourseRouteConfig.pathBuilder,
} as const;
