import { Route } from "react-router-dom";

import { RegisterProvider } from "../contexts";
import { REGISTER_ROUTE_PATH } from "../navigation/constants";
import { RegisterPage } from "../pages/RegisterPage";
import { RegisterRouteGuard } from "./RegisterRouteGuard";

export const registerRoute = (
  <Route
    path={REGISTER_ROUTE_PATH}
    element={
      <RegisterRouteGuard>
        <RegisterProvider>
          <RegisterPage />
        </RegisterProvider>
      </RegisterRouteGuard>
    }
  />
);
