import type { ReactNode } from "react";

import { Layout } from "@shared/layouts";
import { AppInteractionLock, Loading, Modal, Toast } from "@shared/overlays";
import { User } from "@shared/user";
type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => (
  <Layout.Provider>
    <Loading.Provider>
      <Modal.Provider>
        <Toast.Provider>
          <AppInteractionLock.Provider>
            <User.Provider>{children}</User.Provider>
          </AppInteractionLock.Provider>
        </Toast.Provider>
      </Modal.Provider>
    </Loading.Provider>
  </Layout.Provider>
);
