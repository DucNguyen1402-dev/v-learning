import type { ReactNode } from "react";

import type { FieldLayout } from "@shared/fields";

import { FieldContext } from "./FieldContext";
import type { FieldContextValues } from "./FieldContextValues";

type FieldProviderProps = {
  children: ReactNode;
  layout: FieldLayout;
};

export const FieldProvider = ({ children, layout }: FieldProviderProps) => {
  const value: FieldContextValues = {
    layout,
  };
  return (
    <FieldContext.Provider value={value}>{children}</FieldContext.Provider>
  );
};
