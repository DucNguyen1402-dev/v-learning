import type { AppRoute } from "@routes";
import { AppRoutes } from "@routes";

import { BlogsPage } from "../pages/BlogsPage";
export const BlogsRoute: AppRoute = {
  path: AppRoutes.client.paths.BLOGS,
  element: <BlogsPage />,
};
