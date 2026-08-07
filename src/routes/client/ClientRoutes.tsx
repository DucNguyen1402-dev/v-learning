import { Navigate, Route, Routes } from "react-router-dom";

import { ClientMainLayout } from "@layouts/index";
import { AboutRoute } from "@modules/about";
import { HomeRoute } from "@modules/home";
import { LoginRoute } from "@modules/login";
import { PasswordResetRoute } from "@modules/password-reset";
import { RegisterRoute } from "@modules/register";
import { ClientProvider } from "@providers/client";

const ClientRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/client" replace />} />
    <Route
      path="/client"
      element={
        <ClientProvider>
          <ClientMainLayout />
        </ClientProvider>
      }
    >
      <Route index element={<Navigate to="/client/home" replace />} />
      <Route path="home" element={<HomeRoute />} />
      <Route path="login" element={<LoginRoute />} />
      <Route path="about" element={<AboutRoute />} />
      <Route path="register" element={<RegisterRoute />} />
      <Route path="password-reset" element={<PasswordResetRoute />} />
    </Route>
  </Routes>
);

export default ClientRoutes;
