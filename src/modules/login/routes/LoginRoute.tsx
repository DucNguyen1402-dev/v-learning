import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { LoginProvider } from "../contexts";
import { LoginPage } from "../pages/LoginPage";

export const loginRoute = (
  <Route
    path={Navigation.client.paths.LOGIN}
    element={
      <LoginProvider>
        <LoginPage />
      </LoginProvider>
    }
  />
);
