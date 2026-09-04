import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CourseByCategoryPage } from "../page/CourseByCategoryPage";
import { CourseCategoryRouteProvider } from "../provider";
export const courseCategoryRoute = (
  <Route
    path={Navigation.client.builderPaths.CLIENT_COURSES_BY_CATEGORY}
    element={
      <CourseCategoryRouteProvider>
        <CourseByCategoryPage />
      </CourseCategoryRouteProvider>
    }
  />
);
