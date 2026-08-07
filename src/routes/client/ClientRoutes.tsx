import { Navigate, Route, Routes } from "react-router-dom";

import { ClientMainLayout } from "@layouts/index";
import { AboutRoute } from "@modules/about";
import { HomeRoute } from "@modules/home";
import { LoginRoute } from "@modules/login";
const ClientRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/client" replace />} />
    <Route path="/client" element={<ClientMainLayout />}>
      <Route index element={<HomeRoute />} />
      <Route path="login" element={<LoginRoute />} />
      <Route path="about" element={<AboutRoute />} />
    </Route>
  </Routes>
);

export default ClientRoutes;
