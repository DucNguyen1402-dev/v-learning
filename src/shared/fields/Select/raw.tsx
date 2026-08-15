import { cn } from "@shared/utils";
import { ChevronDown } from "lucide-react";

type SelectProps = {
  value: string | number;
  options: Array<
    | { value: string | number; label: string }
    | {
        label: string;
        options: Array<{ value: string | number; label: string }>;
      }
  >;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  invalid?: boolean;
  defaultOptionLabel?: string;
  disabled?: boolean;
  disabledDefaultOption?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;
export const Select = ({
  value,
  options,
  onChange,
  invalid = false,
  defaultOptionLabel,
  disabled,
  disabledDefaultOption = false,
  ...props
}: SelectProps) => {
  return (
    <div className="relative">
      <select
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={cn("field-base select", {
          "field-disabled": disabled,
          "field-invalid": invalid,
          "field-default": !invalid && !disabled,
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
};
