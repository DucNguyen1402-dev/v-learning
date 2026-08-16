import { Navigate, Route, Routes } from "react-router-dom";

import { ClientRouteTree } from "@routes/client/ClientRouteTree";

export const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/client" replace />} />
    {ClientRouteTree}
  </Routes>
);
