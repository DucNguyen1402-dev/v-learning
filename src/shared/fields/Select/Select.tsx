import { cn } from "@shared/utils";
import { ChevronDown } from "lucide-react";

type SelectProps = {
  value: string;
  options: Array<
    | { value: string; label: string }
    | { label: string; options: Array<{ value: string; label: string }> }
  >;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isError?: boolean;
  defaultOptionLabel?: string;
  disabled?: boolean;
  disabledDefaultOption?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;
export const Select = ({
  value,
  options,
  onChange,
  isError = false,
  defaultOptionLabel,
  disabled,
  disabledDefaultOption = false,
  ...props
}: SelectProps) => (
  <div className="relative">
    <select
      value={value}
      disabled={disabled}
      onChange={onChange}
      className={cn("field-base select", {
        "field-disabled": disabled,
        "field-error": isError,
        "field-default": !isError && !disabled,
      })}
      {...props}
    >
      {defaultOptionLabel && (
        <option
          value=""

          disabled={disabledDefaultOption}
        >
          {defaultOptionLabel}
        </option>
      )}

      {options.map((item) => {
        if ("options" in item) {
          return (
            <optgroup key={item.label} label={item.label}>
              {item.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          );
        }

        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
    <div className="select-icon-wrapper">
      <ChevronDown className="select-icon" />
    </div>
  </div>
);
