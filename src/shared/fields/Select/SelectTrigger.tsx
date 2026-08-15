import { cn } from "@shared/utils";
import { MousePointer2 } from "lucide-react";

import { displayState } from "./config";
import { useSelectContext } from "./contexts";

type SelectTriggerProps = {
  disabled?: boolean;
  invalid?: boolean;
  id: string;
  value: number | null;
  labels: {
    placeholder: string;
    disabled: string;
    required: string;
  };
};

export const SelectTrigger = ({
  disabled = false,
  id,
  labels,
  value = null,
  invalid,
}: SelectTriggerProps) => {
  const { isOpen, toggle } = useSelectContext();
  const state = displayState({
    disabled,
    selecting: isOpen,
    selected: value,
  });

  const content = {
    disabled: labels.disabled,
    selecting: "Đang chọn...",
    selected: value!,
    placeholder: labels.placeholder,
  }[state];

  return (
    <button
      id={id}
      onClick={toggle}
      className={cn("field-base select-button-container", {
        "field-disabled": disabled,
        "field-error": invalid && !disabled,
        "field-default": !invalid && !disabled,
        "select-button-inactive": !isOpen && !value,
        "select-button-active": isOpen,
        "select-button-selected": !!value,
      })}
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      disabled={disabled}
    >
      <MousePointer2 className="trigger-icon" />
      <span>{content}</span>
    </button>
  );
};
