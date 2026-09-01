import type { ReactNode } from "react";

import { EnrollUserContext } from "./EnrollUserContext";
import { useEnrollUser } from "./hooks";

interface EnrollUserProviderProps {
  children: ReactNode;
  maKhoaHoc: string;
}

export const EnrollUserProvider = ({
  children,
  maKhoaHoc,
}: EnrollUserProviderProps) => {
  const enrollUser = useEnrollUser({ maKhoaHoc });

  return (
    <EnrollUserContext.Provider value={enrollUser}>
      {children}
    </EnrollUserContext.Provider>
  );
};
