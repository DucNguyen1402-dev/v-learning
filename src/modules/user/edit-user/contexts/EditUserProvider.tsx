import type { ReactNode } from "react";

import { EditUserContext } from "./EditUserContext";
import { useEditUser } from "./hooks";

type EditUserProviderProps = {
  children: ReactNode;
};

export const EditUserProvider = ({ children }: EditUserProviderProps) => {
  const editUser = useEditUser();
  return (
    <EditUserContext.Provider value={editUser}>
      {children}
    </EditUserContext.Provider>
  );
};
