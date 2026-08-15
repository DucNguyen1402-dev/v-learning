import { cn } from "@shared/utils";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

import { displayState } from "./config";
import { useDatePickerContext } from "./contexts";

type DateButtonProps = {
  disabled?: boolean;
  isError?: boolean;
  id: string;
  value: Date | null;
  labels: {
    placeholder: string;
    disabled: string;
    required: string;
  };
};

export const DateButton = ({
  disabled = false,
  id,
  labels,
  value = null,
  isError,
}: DateButtonProps) => {
  const { toggleDatePicker, isDatePickerOpen } = useDatePickerContext();

  const state = displayState({
    disabled,
    selecting: isDatePickerOpen,
    selected: value,
  });

  const content = {
    disabled: labels.disabled,
    selecting: "Đang chọn...",
    selected: format(value!, "dd/MM/yyyy"),
    placeholder: labels.placeholder,
  }[state];

  return (
    <button
      id={id}
      onClick={toggleDatePicker}
      className={cn("field-base date-button-container", {
        "field-disabled": disabled,
        "field-error": isError && !disabled,
        "field-default": !isError && !disabled,
        "date-button-inactive": !isDatePickerOpen && !value,
        "date-button-active": isDatePickerOpen,
        "date-button-selected": !!value,
      })}
      aria-expanded={isDatePickerOpen}
      aria-haspopup="dialog"
      disabled={disabled}
    >
      <Calendar className="size-4.5" />
      <span>{content}</span>
    </button>
  );
};
