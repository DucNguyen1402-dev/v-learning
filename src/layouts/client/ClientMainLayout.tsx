import { useRef } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "@shared/layouts";
import { useScrollOnRouteChange } from "@shared/navigation";
import { GlobalUI } from "@shared/overlays";

import { BackButton } from "./components";
import { Footer, Header } from "./shell";

const ClientMainLayout = () => {
  const mainRef = useRef<HTMLElement>(null);

  useScrollOnRouteChange({ ref: mainRef });
  const { shouldShowBackButton } = Layout.use();

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main
          ref={mainRef}
          className="mx-auto max-w-7xl flex-1 bg-bg-tertiary p-6 pb-12"
        >
          {shouldShowBackButton && <BackButton />}
          <Outlet />
        </main>
        <Footer />
      </div>
      <GlobalUI />
    </>
  );
};

export default ClientMainLayout;
