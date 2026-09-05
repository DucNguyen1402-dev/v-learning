import { Route } from "react-router-dom";

import { COURSES_BY_CATEGORY_BUILDER_PATH } from "../navigation/constants";
import { CourseByCategoryPage } from "../page/CourseByCategoryPage";
import { CourseCategoryRouteProvider } from "../provider";
export const courseCategoryRoute = (
  <Route
    path={COURSES_BY_CATEGORY_BUILDER_PATH}
    element={
      <CourseCategoryRouteProvider>
        <CourseByCategoryPage />
      </CourseCategoryRouteProvider>
    }
  />
);
