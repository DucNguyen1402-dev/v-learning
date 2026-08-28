import { Outlet } from "react-router-dom";

import { Layout } from "@shared/layouts";
import { GlobalUI } from "@shared/overlays";

import { BackButton } from "../shared/components";
import { SIDEBAR_COLLAPSED_OFFSET, SIDEBAR_CONTENT_OFFSET } from "./constants";
import { useLayoutContext } from "./contexts";
import { Sidebar } from "./shell";

export const AdminMainLayout = () => {
  const { isSidebarOpen } = useLayoutContext();
  const { shouldShowBackButton } = Layout.use();
  return (
    <>
      <div className="min-h-screen bg-bg-base">
        <Sidebar />

        <div
          className={`${isSidebarOpen ? SIDEBAR_CONTENT_OFFSET : SIDEBAR_COLLAPSED_OFFSET} flex flex-1 flex-col transition-[margin-left] duration-300 ease-in-out`}
        >
          <main className="admin-container flex-1">
            {shouldShowBackButton && <BackButton />}
            <Outlet />
          </main>
        </div>
      </div>
      <GlobalUI />
    </>
  );
};
