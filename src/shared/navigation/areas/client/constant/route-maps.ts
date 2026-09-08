import { coursesRouteConfig } from "@modules/courses/client/navigation";
import { homeRouteConfig } from "@modules/home/navigation";
import { loginRouteConfig } from "@modules/login/navigation";
import { personalCoursesRouteConfig } from "@modules/personal-courses/navigation";
import { aboutRouteConfig } from "@modules/placeholders/about/navigation";
import { blogsRouteConfig } from "@modules/placeholders/blogs/navigation";
import { communityRouteConfig } from "@modules/placeholders/community/navigation";
import { contactRouteConfig } from "@modules/placeholders/contact/navigation";
import { eventRouteConfig } from "@modules/placeholders/event/navigation";
import { supportRouteConfig } from "@modules/placeholders/support/navigation";
import {
  passwordChangeRouteConfig,
  profileChangeRouteConfig,
  profileRouteConfig,
} from "@modules/profile/client/navigation";
import { registerRouteConfig } from "@modules/register/navigation";

export const CLIENT_ROUTE_KEYS = {
  ...homeRouteConfig.key,
  ...loginRouteConfig.key,
  ...registerRouteConfig.key,
  ...personalCoursesRouteConfig.key,
  ...coursesRouteConfig.key,
  ...profileRouteConfig.key,
  ...profileChangeRouteConfig.key,
  ...passwordChangeRouteConfig.key,

  // Non-essential demo module keys
  ...aboutRouteConfig.key,
  ...blogsRouteConfig.key,
  ...communityRouteConfig.key,
  ...contactRouteConfig.key,
  ...eventRouteConfig.key,
  ...supportRouteConfig.key,
} as const;

export type ClientRouteKey =
  (typeof CLIENT_ROUTE_KEYS)[keyof typeof CLIENT_ROUTE_KEYS];

export const clientRouteKeys = Object.values(
  CLIENT_ROUTE_KEYS,
) as ClientRouteKey[];

export const CLIENT_ROUTE_TITLES = {
  ...homeRouteConfig.title,
  ...loginRouteConfig.title,
  ...registerRouteConfig.title,
  ...personalCoursesRouteConfig.title,
  ...coursesRouteConfig.title,
  ...profileRouteConfig.title,
  ...passwordChangeRouteConfig.title,
  ...profileChangeRouteConfig.title,

  // Non-essential demo module titles
  ...aboutRouteConfig.title,
  ...blogsRouteConfig.title,
  ...communityRouteConfig.title,
  ...eventRouteConfig.title,
  ...contactRouteConfig.title,
  ...supportRouteConfig.title,
} as const;

export const CLIENT_ROUTE_PATHS = {
  ...homeRouteConfig.path,
  ...loginRouteConfig.path,
  ...registerRouteConfig.path,
  ...personalCoursesRouteConfig.path,
  ...coursesRouteConfig.path,
  ...profileRouteConfig.path,
  ...profileChangeRouteConfig.path,
  ...passwordChangeRouteConfig.path,

  // Non-essential demo module paths
  ...aboutRouteConfig.path,
  ...blogsRouteConfig.path,
  ...communityRouteConfig.path,
  ...contactRouteConfig.path,
  ...eventRouteConfig.path,
  ...supportRouteConfig.path,
} as const;
