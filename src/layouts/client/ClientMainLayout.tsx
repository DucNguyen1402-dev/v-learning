import { Outlet } from "react-router-dom";

import { Layout } from "@shared/layouts";
import { GlobalUI } from "@shared/overlays";

import { BackButton } from "./components";
import { Footer, Header } from "./shell";

export const ClientMainLayout = () => {
  const { shouldShowBackButton } = Layout.use();

  return (
    <>
      <div className="flex min-h-screen flex-col bg-bg-base">
        <Header />
        <main className="client-container flex-1 bg-bg-default">
          {shouldShowBackButton && <BackButton />}
          <Outlet />
        </main>
        <Footer />
      </div>
      <GlobalUI />
    </>
  );
};
