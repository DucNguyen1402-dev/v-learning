import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CourseByCategoryPage } from "../page/CourseByCategoryPage";
import { CourseCategoryRouteProvider } from "../provider";
export const courseCategoryRoute = (
  <Route
    path={Navigation.client.builders.COURSES_BY_CATEGORY(":maDanhMuc")}
    element={
      <CourseCategoryRouteProvider>
        <CourseByCategoryPage />
      </CourseCategoryRouteProvider>
    }
  />
);
