import type { ReactNode } from "react";
export const FieldRoot = ({ children }: { children: ReactNode }) => {
  return <div className="field-root">{children}</div>;
};
