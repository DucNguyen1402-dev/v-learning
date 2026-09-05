import {
  courseEnrollmentRouteConfig,
  editCourseBuilderRouteConfig,
  enrollUserRouteConfig,
} from "@modules/courses/admin";
import { editUserRouteConfig, userCourseRouteConfig } from "@modules/user";

export const ADMIN_ROUTE_BUILDER_KEYS = {
  ...editCourseBuilderRouteConfig.builderKey,
  ...courseEnrollmentRouteConfig.builderKey,
  ...enrollUserRouteConfig.builderKey,

  ...editUserRouteConfig.builderKey,
  ...userCourseRouteConfig.builderKey,
} as const;

export type AdminRouteBuilderKey =
  (typeof ADMIN_ROUTE_BUILDER_KEYS)[keyof typeof ADMIN_ROUTE_BUILDER_KEYS];

export const adminRouteBuilderKeys = Object.values(
  ADMIN_ROUTE_BUILDER_KEYS,
) as AdminRouteBuilderKey[];

export const ADMIN_ROUTE_BUILDER_TITLES = {
  ...editCourseBuilderRouteConfig.title,
  ...courseEnrollmentRouteConfig.title,
  ...enrollUserRouteConfig.title,
  ...editUserRouteConfig.title,
  ...userCourseRouteConfig.title,
} as const;

export const ADMIN_ROUTE_BUILDER_PATHS = {
  ...editCourseBuilderRouteConfig.pathBuilder,
  ...courseEnrollmentRouteConfig.pathBuilder,
  ...enrollUserRouteConfig.pathBuilder,
  ...editUserRouteConfig.pathBuilder,
  ...userCourseRouteConfig.pathBuilder,
} as const;
