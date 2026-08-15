import { useContext } from "react";

import { FieldContext } from "./FieldContext";

export const useFieldContext = () => {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error("useFieldContext must be used within a <FieldProvider>");
  }
  return context;
};
