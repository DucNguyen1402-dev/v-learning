import type { AppRoute } from "@routes";

import { AboutRoute } from "./about";
import { BlogsRoute } from "./blogs";
import { CoursesRoute } from "./courses";
import { HomeRoute } from "./home";
import { LoginRoute } from "./login";
import { PlaygroundRoute } from "./playgrounds/PlaygroundRoute";
import { ProfileRoute } from "./profile";
import { RegisterRoute } from "./register";

export const clientRoutes: AppRoute[] = [
  AboutRoute,
  BlogsRoute,
  CoursesRoute,
  HomeRoute,
  LoginRoute,
  ProfileRoute,
  PlaygroundRoute,
  RegisterRoute,
];
