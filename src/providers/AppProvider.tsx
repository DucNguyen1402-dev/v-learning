import type { ReactNode } from "react";

import { UserPreferences } from "@shared/current-user";
import { Layout } from "@shared/layouts";
import { AppInteractionLock, Loading, Modal, Toast } from "@shared/overlays";
type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => (
  <Layout.Provider>
    <Loading.Provider>
      <Modal.Provider>
        <Toast.Provider>
          <AppInteractionLock.Provider>
            <UserPreferences.Provider>{children}</UserPreferences.Provider>
          </AppInteractionLock.Provider>
        </Toast.Provider>
      </Modal.Provider>
    </Loading.Provider>
  </Layout.Provider>
);
