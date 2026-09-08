import type { ReactNode } from "react";

import { CurrentUser } from "@shared/current-user";
import { Layout } from "@shared/layouts";
import {
  AppInteractionLock,
  AppLock,
  Loading,
  Modal,
  Toast,
} from "@shared/overlays";
type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => (
  <Layout.Provider>
    <Loading.Provider>
      <Modal.Provider>
        <Toast.Provider>
          <AppInteractionLock.Provider>
            <AppLock.Provider>
              <CurrentUser.Provider>{children}</CurrentUser.Provider>
            </AppLock.Provider>
          </AppInteractionLock.Provider>
        </Toast.Provider>
      </Modal.Provider>
    </Loading.Provider>
  </Layout.Provider>
);
