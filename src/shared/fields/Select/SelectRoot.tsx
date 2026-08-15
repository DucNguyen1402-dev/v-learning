import type { ReactNode } from "react";

import { SelectProvider } from "./contexts";

type SelectRootProps = {
  children: ReactNode;
};
export const SelectRoot = ({ children }: SelectRootProps) => {
  return (
    <div className="select-root-container">
      <SelectProvider>{children}</SelectProvider>
    </div>
  );
};
