import { Navigate, Route, Routes } from "react-router-dom";

import { ClientRouteTree } from "@routes";

export const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/client" replace />} />
    {ClientRouteTree}
  </Routes>
);
