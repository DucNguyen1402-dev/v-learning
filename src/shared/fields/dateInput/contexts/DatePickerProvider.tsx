import type { ReactNode } from "react";

import { DatePickerContext } from "./DatePickerContext";
import type { DatePickerContextValues } from "./DatePickerContextValues";
import { useDatePicker } from "./hooks";

type DatePickerProviderProps = {
  children: ReactNode;
};

export const DatePickerProvider = ({ children }: DatePickerProviderProps) => {
  const { isDatePickerOpen, toggleDatePicker, datePickerRef } = useDatePicker();

  const value: DatePickerContextValues = {
    isDatePickerOpen,
    toggleDatePicker,
    datePickerRef,
  };

  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  );
};
