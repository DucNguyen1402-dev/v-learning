import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { CoursesProvider } from "../contexts";
import { CoursesPage } from "../pages/CoursesPage";

export const coursesRoute = (
  <Route
    path={Navigation.client.paths.COURSES}
    element={
      <CoursesProvider>
        <CoursesPage />
      </CoursesProvider>
    }
  />
);
