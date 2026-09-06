import { Route } from "react-router-dom";

import { LoginProvider } from "../contexts";
import { LOGIN_ROUTE_SEGMENT } from "../navigation/constants";
import { LoginPage } from "../pages/LoginPage";
import { LoginRouteGuard } from "./LoginRouteGuard";

export const loginRoute = (
  <Route
    path={LOGIN_ROUTE_SEGMENT}
    element={
      <LoginRouteGuard>
        <LoginProvider>
          <LoginPage />
        </LoginProvider>
      </LoginRouteGuard>
    }
  />
);
