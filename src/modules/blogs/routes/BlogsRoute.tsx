import type { AppRoute } from "@routes";
import { Navigation } from "@shared/navigation";

import { BlogsPage } from "../pages/BlogsPage";
export const BlogsRoute: AppRoute = {
  path: Navigation.client.paths.BLOGS,
  element: <BlogsPage />,
};
