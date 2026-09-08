import {
  coursesByCategoryBuilderRouteConfig,
  coursesDetailBuilderRouteConfig,
  coursesPaymentBuilderRouteConfig,
} from "@modules/courses/client/navigation";
import {
  coursesPlayerRouteConfig,
  personalCoursesDetailBuilderRouteConfig,
} from "@modules/personal-courses/navigation";

export const CLIENT_ROUTE_BUILDER_KEYS = {
  ...coursesDetailBuilderRouteConfig.builderKey,
  ...coursesByCategoryBuilderRouteConfig.builderKey,
  ...coursesPaymentBuilderRouteConfig.builderKey,
  ...personalCoursesDetailBuilderRouteConfig.builderKey,
  ...coursesPlayerRouteConfig.builderKey,
} as const;

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
