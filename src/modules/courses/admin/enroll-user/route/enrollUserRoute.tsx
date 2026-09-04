import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { EnrollUserPage } from "../page/EnrollUserPage";
import { EnrollUserRouteProvider } from "../provider";

export const enrollUserRoute = (
  <Route
    path={Navigation.admin.buildersPaths.ADMIN_ENROLL_USER}
    element={
      <EnrollUserRouteProvider>
        <EnrollUserPage />
      </EnrollUserRouteProvider>
    }
  />
);
