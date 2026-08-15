import { useMemo } from "react";
import {
  type ChevronProps,
  DayPicker as ReactDayPicker,
} from "react-day-picker";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useDatePickerContext } from "../contexts";

import { cn } from "@/shared/utils";

const customComponents = {
  Chevron: ({ orientation }: ChevronProps) => {
    const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
    return <Icon className="chevron-icon" />;
  },
};

type DatePickerProps = {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
};

export const DayPicker = ({ value, onChange }: DatePickerProps) => {
  const { isDatePickerOpen, datePickerRef } = useDatePickerContext();

  const today = useMemo(() => new Date(), []);
  return (
    <div
      className={cn(
        "picker-container",
        isDatePickerOpen ? "picker-container-open" : "picker-container-closed",
      )}
      ref={datePickerRef}
    >
      <ReactDayPicker
        mode="single"
        selected={value}
        onSelect={onChange}
        defaultMonth={today}
        disabled={{ before: new Date() }}
        components={customComponents}
      />
    </div>
  );
};
