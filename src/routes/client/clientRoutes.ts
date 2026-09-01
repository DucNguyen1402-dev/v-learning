import { coursesRoutes } from "@modules/courses/client";
import { homeRoute } from "@modules/home";
import { loginRoute } from "@modules/login";
import { personalCourseRoute } from "@modules/personal-courses";
import {
  aboutRoute,
  blogsRoute,
  communityRoute,
  contactRoute,
  eventRoute,
  supportRoute,
} from "@modules/placeholders";
import { clientProfileRoutes } from "@modules/profile/client";
import { registerRoute } from "@modules/register";

export const clientRoutes = [
  aboutRoute,
  blogsRoute,
  communityRoute,
  eventRoute,
  contactRoute,
  supportRoute,
  coursesRoutes,
  homeRoute,
  loginRoute,
  clientProfileRoutes,
  registerRoute,
  personalCourseRoute,
];
