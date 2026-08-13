import { createContext } from "react";

import type { DatePickerContextValues } from "./DatePickerContextValues";

export const DatePickerContext = createContext<DatePickerContextValues | null>(
  null,
);
