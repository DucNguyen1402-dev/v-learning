import { Outlet } from "react-router-dom";

const ClientMainLayout = () => (
  <div className="min-h-screen overflow-hidden">
    <main>
      <Outlet />
    </main>
  </div>
);

export default ClientMainLayout;
