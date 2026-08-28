import { cn } from "@shared/utils";
import { ChevronDown } from "lucide-react";

import { LabelElipsis } from "./components";
import { displayState } from "./config";
import { useSelectContext } from "./contexts";

type SelectTriggerProps = {
  disabled?: boolean;
  invalid?: boolean;
  id?: string;
  labels?: {
    placeholder?: string;
    disabled?: string;
    required?: string;
    selected?: string;
  };
  icon?: React.ComponentType<{ className: string }>;
  entity?: string;
  shouldShowPlaceholder?: boolean;
};

export const SelectTrigger = ({
  disabled = false,
  id,
  labels,
  invalid,
  entity,
  shouldShowPlaceholder = false,
}: SelectTriggerProps) => {
  const { isOpen, toggle, option } = useSelectContext();
  const state = displayState({
    disabled,
    selecting: isOpen,
    selected: option?.value,
  });

  const isDesktop = window.innerWidth >= 1024;

  const content = {
    disabled: labels?.disabled ?? "",
    selecting: <LabelElipsis />,
    selected: option?.label,
    default: shouldShowPlaceholder ? (labels?.placeholder ?? "") : "Tất cả",
  }[state];

  const hasValue = option?.value != null;

  const displayContent =
    hasValue && !isOpen
      ? `${labels?.selected ?? ""} ${content} ${isDesktop ? `${entity ? `/ ${entity}` : ""}` : ""}`
      : content;

  return (
    <button
      id={id}
      onClick={toggle}
      className={cn("field-base select-button-container", {
        "field-disabled": disabled,
        "field-error": invalid && !disabled,
        "field-default": !invalid && !disabled,
        "select-button-inactive": !isOpen && !option?.value,
        "select-button-active": isOpen,
        "select-button-selected": !!option?.value,
      })}
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      disabled={disabled}
    >
      {
        <ChevronDown
          className={cn("trigger-icon", {
            "trigger-icon-active": isOpen,
          })}
        />
      }
      <span>{displayContent}</span>
    </button>
  );
};
