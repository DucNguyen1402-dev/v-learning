import type { ReactNode } from "react";

import { Layout } from "@shared/layouts";
import { Loading, Modal, Toast } from "@shared/overlays";
import { Theme } from "@shared/theme";

type ClientProvidersProps = {
  children: ReactNode;
};
export const ClientProvider = ({ children }: ClientProvidersProps) => (
  <Layout.Provider>
    <Loading.Provider>
      <Modal.Provider>
        <Toast.Provider>
          <Theme.Provider>{children}</Theme.Provider>
        </Toast.Provider>
      </Modal.Provider>
    </Loading.Provider>
  </Layout.Provider>
);
