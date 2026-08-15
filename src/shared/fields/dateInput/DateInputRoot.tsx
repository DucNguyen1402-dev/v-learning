import type { ReactNode } from "react";

import { DatePickerProvider } from "./contexts";

type DatePickerInputRootProps = {
  children: ReactNode;
};
export const DateInputRoot = ({ children }: DatePickerInputRootProps) => {
  return (
    <DatePickerProvider>
      <div className="relative">{children}</div>
    </DatePickerProvider>
  );
};
