import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { LoginProvider } from "../contexts";
import { LoginPage } from "../pages/LoginPage";
import { LoginRouteGuard } from "./LoginRouteGuard";

export const loginRoute = (
  <Route
    path={Navigation.client.paths.LOGIN}
    element={
      <LoginRouteGuard>
        <LoginProvider>
          <LoginPage />
        </LoginProvider>
      </LoginRouteGuard>
    }
  />
);
