import { cn } from "@shared/utils";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

import { useDatePickerContext } from "./contexts";

type DateButtonProps = {
  disabled?: boolean;
  id: string;
  value: Date | null;
  labels: {
    placeholder: string;
    disabled: string;
    required: string;
  };
};

export const DateButton = ({
  disabled,
  id,
  labels,
  value,
}: DateButtonProps) => {
  const { toggleDatePicker, isDatePickerOpen } = useDatePickerContext();
  const showDateLabel = value
    ? format(value, "dd/MM/yyyy")
    : labels.placeholder;

  const dateLabel = isDatePickerOpen ? "Đang chọn..." : showDateLabel;
  return (
    <button
      type="button"
      id={id}
      onClick={toggleDatePicker}
      className={cn(
        "flex w-full items-center gap-2 rounded-sm p-1.5 transition-colors",
        disabled
          ? "border border-slate-600 bg-slate-900/80 text-gray-500"
          : "form-focus cursor-pointer bg-slate-900/40 text-gray-400",
      )}
      aria-expanded={isDatePickerOpen}
      aria-haspopup="dialog"
      disabled={disabled}
    >
      <Calendar className="size-4.5" />
      <span>{disabled ? labels.disabled : dateLabel}</span>
    </button>
  );
};
