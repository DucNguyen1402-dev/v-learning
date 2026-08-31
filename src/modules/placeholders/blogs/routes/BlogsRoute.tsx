import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { BlogsPage } from "../pages/BlogsPage";
export const blogsRoute = (
  <Route path={Navigation.client.paths.BLOGS} element={<BlogsPage />} />
);
