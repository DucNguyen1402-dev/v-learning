import { cn } from "@shared/utils";

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
  error?: string;
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;
export const Select = ({
  value,
  options,
  onChange,
  isError = false,
  defaultOptionLabel,
  disabled,
  disabledDefaultOption = false,
  className,
  ...props
}: SelectProps) => (
  <div className="flex flex-col gap-2">
    <select
      value={value}
      disabled={disabled}
      onChange={onChange}
      className={cn(
        "form-focus rounded-sm bg-slate-900/40 px-4 py-1.5 text-slate-100 transition-colors duration-300",
        className,
      )}
      {...props}
    >
      {defaultOptionLabel && (
        <option
          value=""
          className="bg-slate-800 text-white"
          disabled={disabledDefaultOption}
        >
          {defaultOptionLabel}
        </option>
      )}

      {options.map((item) => {
        if ("options" in item) {
          return (
            <optgroup
              key={item.label}
              label={item.label}
              className="bg-slate-800 text-sm text-white"
            >
              {item.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          );
        }

        return (
          <option
            key={item.value}
            value={item.value}
            className={cn("input-base", {
              "input-disabled": disabled,
              "input-error": isError,
              "input-default": !isError && !disabled,
            })}
          >
            {item.label}
          </option>
        );
      })}
    </select>
  </div>
);
