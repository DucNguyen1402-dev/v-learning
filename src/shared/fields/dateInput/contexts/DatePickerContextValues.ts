import type { RefObject } from "react";

export type DatePickerContextValues = {
  isDatePickerOpen: boolean;
  toggleDatePicker: () => void;
  datePickerRef: RefObject<HTMLDivElement | null>;
};
