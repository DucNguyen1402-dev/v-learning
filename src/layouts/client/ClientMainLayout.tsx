import { useRef } from "react";
import { Outlet } from "react-router-dom";

import { useScrollOnRouteChange } from "@shared/navigation";
import { GlobalUI } from "@shared/overlays";

import { Footer, Header } from "./shell";

const ClientMainLayout = () => {
  const mainRef = useRef<HTMLElement>(null);
  useScrollOnRouteChange({ ref: mainRef });

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main ref={mainRef} className="mx-auto max-w-7xl p-6 pb-12">
        <Outlet />
      </main>
      <Footer />
      <GlobalUI />
    </div>
  );
};

export default ClientMainLayout;
