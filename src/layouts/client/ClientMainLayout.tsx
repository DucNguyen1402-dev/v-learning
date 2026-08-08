import { Outlet } from "react-router-dom";

import { Layout } from "@shared/layouts";
import { GlobalUI } from "@shared/overlays";

import { BackButton } from "./components";
import { Footer, Header } from "./shell";

const ClientMainLayout = () => {
  const { shouldShowBackButton } = Layout.use();

  return (
    <>
      <div className="flex min-h-screen flex-col bg-surface-0">
        <Header />
        <main className="client-container flex-1 bg-surface-1">
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
