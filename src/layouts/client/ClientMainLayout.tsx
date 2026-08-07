import { Outlet } from "react-router-dom";

// import { GlobalUI } from "@shared/overlays";
import { Footer, Header } from "./shell";

const ClientMainLayout = () => (
  <div className="min-h-screen overflow-hidden">
    <Header />
    <main className="mx-auto max-w-7xl p-6 pb-12">
      <Outlet />
    </main>
    <Footer />
    {/* <GlobalUI /> */}
  </div>
);

export default ClientMainLayout;
