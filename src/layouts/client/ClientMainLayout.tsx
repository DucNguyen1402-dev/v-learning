import { Outlet } from "react-router-dom";

import { Layout } from "@shared/layouts";
import { GlobalUI } from "@shared/overlays";

import { BackButton } from "./components";
import { Footer, Header } from "./shell";

export const ClientMainLayout = () => {
  const { shouldShowBackButton } = Layout.use();

  return (
    <>
      <div className="bg-surface-0 flex min-h-screen flex-col">
        <Header />
        <main className="client-container bg-surface-1 flex-1">
          {shouldShowBackButton && <BackButton />}
          <Outlet />
        </main>
        <Footer />
      </div>
      <GlobalUI />
    </>
  );
};
