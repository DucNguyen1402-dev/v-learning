import type { ReactNode } from "react";

import { Layout } from "@shared/layouts";
import { Loading, Modal, Toast } from "@shared/overlays";

type ClientProvidersProps = {
  children: ReactNode;
};
const ClientProvider = ({ children }: ClientProvidersProps) => (
  <Layout.Provider>
    <Loading.Provider>
      <Modal.Provider>
        <Toast.Provider>{children}</Toast.Provider>
      </Modal.Provider>
    </Loading.Provider>
  </Layout.Provider>
);

export default ClientProvider;
