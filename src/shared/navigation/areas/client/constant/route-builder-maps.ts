import {
  coursesByCategoryBuilderRouteConfig,
  coursesDetailBuilderRouteConfig,
  coursesPaymentBuilderRouteConfig,
} from "@modules/courses/client";
import {
  coursesPlayerRouteConfig,
  personalCoursesDetailBuilderRouteConfig,
} from "@modules/personal-courses";

export const CLIENT_ROUTE_BUILDER_KEYS = {
  ...coursesDetailBuilderRouteConfig.key,
  ...coursesByCategoryBuilderRouteConfig.key,
  ...coursesPaymentBuilderRouteConfig.key,
  ...personalCoursesDetailBuilderRouteConfig.key,
  ...coursesPlayerRouteConfig.key,
} as const;

export type ClientRouteBuilderKey =
  (typeof CLIENT_ROUTE_BUILDER_KEYS)[keyof typeof CLIENT_ROUTE_BUILDER_KEYS];

export const clientRouteBuilderKeys = Object.values(
  CLIENT_ROUTE_BUILDER_KEYS,
) as ClientRouteBuilderKey[];

export const CLIENT_ROUTE_BUILDER_TITLES = {
  ...coursesDetailBuilderRouteConfig.title,
  ...coursesByCategoryBuilderRouteConfig.title,
  ...coursesPaymentBuilderRouteConfig.title,
  ...personalCoursesDetailBuilderRouteConfig.title,
  ...coursesPlayerRouteConfig.title,
} as const;

export const CLIENT_ROUTE_BUILDER_PATHS = {
  ...coursesDetailBuilderRouteConfig.pathBuilder,
  ...coursesByCategoryBuilderRouteConfig.pathBuilder,
  ...coursesPaymentBuilderRouteConfig.pathBuilder,
  ...personalCoursesDetailBuilderRouteConfig.pathBuilder,
  ...coursesPlayerRouteConfig.pathBuilder,
} as const;
