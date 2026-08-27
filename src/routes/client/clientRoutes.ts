import { aboutRoute } from "@modules/about";
import { blogsRoute } from "@modules/blogs";
import { coursesRoutes } from "@modules/courses/client";
import { homeRoute } from "@modules/home";
import { loginRoute } from "@modules/login";
import { personalCourseRoute } from "@modules/personal-courses";
import { profileRoutes } from "@modules/profile";
import { registerRoute } from "@modules/register";

export const clientRoutes = [
  aboutRoute,
  blogsRoute,
  coursesRoutes,
  homeRoute,
  loginRoute,
  profileRoutes,
  registerRoute,
  personalCourseRoute,
];
