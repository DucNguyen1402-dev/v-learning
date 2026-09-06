import { Route } from "react-router-dom";

import { ENROLL_USER_ROUTE_SEGMENT } from "../navigation/constants";
import { EnrollUserPage } from "../page/EnrollUserPage";
import { EnrollUserRouteProvider } from "../provider";

export const enrollUserRoute = (
  <Route
    path={ENROLL_USER_ROUTE_SEGMENT}
    element={
      <EnrollUserRouteProvider>
        <EnrollUserPage />
      </EnrollUserRouteProvider>
    }
  />
);
