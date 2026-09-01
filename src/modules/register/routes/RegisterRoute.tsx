import { Route } from "react-router-dom";

import { Navigation } from "@shared/navigation";

import { RegisterProvider } from "../contexts";
import { RegisterPage } from "../pages/RegisterPage";
import { RegisterRouteGuard } from "./RegisterRouteGuard";

export const registerRoute = (
  <Route
    path={Navigation.client.paths.REGISTER}
    element={
      <RegisterRouteGuard>
        <RegisterProvider>
          <RegisterPage />
        </RegisterProvider>
      </RegisterRouteGuard>
    }
  />
);
