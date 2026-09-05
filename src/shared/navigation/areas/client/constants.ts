import {
  coursesByCategoryBuilderRouteConfig,
  coursesDetailBuilderRouteConfig,
  coursesPaymentBuilderRouteConfig,
  coursesRouteConfig,
} from "@modules/courses/client";
import { homeRouteConfig } from "@modules/home";
import { loginRouteConfig } from "@modules/login";
import {
  coursesPlayerRouteConfig,
  personalCoursesDetailBuilderRouteConfig,
  personalCoursesRouteConfig,
} from "@modules/personal-courses";
import {
  profileChangeRouteConfig,
  profileRouteConfig,
} from "@modules/profile/client";
import { registerRouteConfig } from "@modules/register";

export const CLIENT_ROUTE_KEYS = {
  ...homeRouteConfig.key,
  ...loginRouteConfig.key,
  ...profileRouteConfig.key,
  ...registerRouteConfig.key,
  ...personalCoursesRouteConfig.key,
  ...coursesRouteConfig.key,
  ...profileChangeRouteConfig.key,
  PROFILE_PASSWORD_CHANGE: "CLIENT_PROFILE_PASSWORD_CHANGE",

  ABOUT: "CLIENT_ABOUT",
  BLOGS: "CLIENT_BLOGS",
  COMMUNITY: "CLIENT_COMMUNITY",
  EVENTS: "CLIENT_EVENTS",
  CONTACT: "CLIENT_CONTACT",
  SUPPORT: "CLIENT_SUPPORT",
} as const;

export const clientRouteKeys = Object.values(
  CLIENT_ROUTE_KEYS,
) as ClientRouteKey[];

export type ClientRouteKey =
  (typeof CLIENT_ROUTE_KEYS)[keyof typeof CLIENT_ROUTE_KEYS];
export type ClientRouteBuilderKey =
  (typeof CLIENT_ROUTE_BUILDER_KEYS)[keyof typeof CLIENT_ROUTE_BUILDER_KEYS];

export const CLIENT_ROUTE_PATHS = {
  [CLIENT_ROUTE_KEYS.PROFILE_PASSWORD_CHANGE]: "password-change",

  [CLIENT_ROUTE_KEYS.ABOUT]: "about",
  [CLIENT_ROUTE_KEYS.REGISTER]: "register",
  [CLIENT_ROUTE_KEYS.BLOGS]: "blogs",
  [CLIENT_ROUTE_KEYS.PROFILE]: "profile",
  [CLIENT_ROUTE_KEYS.COMMUNITY]: "community",
  [CLIENT_ROUTE_KEYS.EVENTS]: "events",
  [CLIENT_ROUTE_KEYS.CONTACT]: "contact",
  [CLIENT_ROUTE_KEYS.SUPPORT]: "support",
} as const;

export const CLIENT_ROUTE_TITLES = {
  ...homeRouteConfig.title,
  ...loginRouteConfig.title,
  ...registerRouteConfig.title,
  ...personalCoursesRouteConfig.title,
  ...coursesRouteConfig.title,
  ...profileRouteConfig.title,

  ...profileChangeRouteConfig.title,
  [CLIENT_ROUTE_KEYS.PROFILE_PASSWORD_CHANGE]: "Password Change",

  [CLIENT_ROUTE_KEYS.ABOUT]: "About",
  [CLIENT_ROUTE_KEYS.BLOGS]: "Blogs",
  [CLIENT_ROUTE_KEYS.COMMUNITY]: "Community",
  [CLIENT_ROUTE_KEYS.EVENTS]: "Events",
  [CLIENT_ROUTE_KEYS.CONTACT]: "Contact",
  [CLIENT_ROUTE_KEYS.SUPPORT]: "Support",
} as const;

export const CLIENT_ROUTE_URLS = {
  ...homeRouteConfig.url,
  ...loginRouteConfig.url,

  ...registerRouteConfig.url,
  ...profileRouteConfig.url,
  ...personalCoursesRouteConfig.url,
  ...coursesRouteConfig.url,

  ...profileChangeRouteConfig.url,
  [CLIENT_ROUTE_KEYS.PROFILE_PASSWORD_CHANGE]:
    "/client/profile/password-change",

  [CLIENT_ROUTE_KEYS.ABOUT]: "/client/about",
  [CLIENT_ROUTE_KEYS.BLOGS]: "/client/blogs",
  [CLIENT_ROUTE_KEYS.PROFILE]: "/client/profile",
  [CLIENT_ROUTE_KEYS.COMMUNITY]: "/client/community",
  [CLIENT_ROUTE_KEYS.EVENTS]: "/client/events",
  [CLIENT_ROUTE_KEYS.CONTACT]: "/client/contact",
  [CLIENT_ROUTE_KEYS.SUPPORT]: "/client/support",
} as const;

/** ================================================================================ */

export const CLIENT_ROUTE_BUILDER_KEYS = {
  ...coursesDetailBuilderRouteConfig.key,
  ...coursesByCategoryBuilderRouteConfig.key,
  ...coursesPaymentBuilderRouteConfig.key,
  ...personalCoursesDetailBuilderRouteConfig.key,
  ...coursesPlayerRouteConfig.key,
} as const;

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

export const CLIENT_ROUTE_BUILDER_URLS = {
  ...coursesDetailBuilderRouteConfig.urlBuilder,
  ...coursesByCategoryBuilderRouteConfig.urlBuilder,
  ...coursesPaymentBuilderRouteConfig.urlBuilder,
  ...personalCoursesDetailBuilderRouteConfig.urlBuilder,
  ...coursesPlayerRouteConfig.urlBuilder,
} as const;
