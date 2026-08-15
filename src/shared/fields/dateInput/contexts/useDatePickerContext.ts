import { useContext } from "react";

import { DatePickerContext } from "./DatePickerContext";

export const useDatePickerContext = () => {
  const context = useContext(DatePickerContext);
  if (!context) {
    throw new Error(
      "useDatePickerContext must be used within a <DatePickerProvider>",
    );
  }
  return context;
};
