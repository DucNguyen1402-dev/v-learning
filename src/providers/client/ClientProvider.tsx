import type { ReactNode } from "react";

import { Loading, Modal, Toast } from "@shared/overlays";

type ClientProvidersProps = {
  children: ReactNode;
};
const ClientProvider = ({ children }: ClientProvidersProps) => (
  <Loading.Provider>
    <Modal.Provider>
      <Toast.Provider>{children}</Toast.Provider>
    </Modal.Provider>
  </Loading.Provider>
);

export default ClientProvider;
