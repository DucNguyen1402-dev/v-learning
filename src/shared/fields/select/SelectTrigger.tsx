import { cn } from "@shared/utils";
import { MousePointer2 } from "lucide-react";

import { displayState } from "./config";
import { useSelectContext } from "./contexts";

type SelectTriggerProps = {
  disabled?: boolean;
  invalid?: boolean;
  id?: string;
  labels: {
    placeholder: string;
    disabled?: string;
    required?: string;
    selected: string;
  };
  icon?: React.ComponentType<{ className: string }>;
  animateIcon?: boolean;
  shouldHideIcon?: boolean;
};

export const SelectTrigger = ({
  disabled = false,
  id,
  labels,
  invalid,
  icon: Icon = MousePointer2,
  animateIcon = true,
  shouldHideIcon = false,
}: SelectTriggerProps) => {
  const { isOpen, toggle, value } = useSelectContext();
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

  const hasValue = value != null;

  const displayContent =
    hasValue && !isOpen ? `${labels.selected}${content}` : content;

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
      {!shouldHideIcon && (
        <Icon
          className={cn("trigger-icon", {
            "triger-icon-active": isOpen && animateIcon,
          })}
        />
      )}
      <span>{displayContent}</span>
    </button>
  );
};
