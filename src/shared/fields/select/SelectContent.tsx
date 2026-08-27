import { useEffect } from "react";

import { cn } from "@shared/utils";

import { SelectGroupItem, SelectItem } from "./components";
import { useSelectContext } from "./contexts";
import { getOptionLabel } from "./utils";
type DropdownMenuProps<T> = {
  options: ReadonlyArray<
    | { value: T | null; label: string }
    | {
        label: string;
        options: Array<{ value: T; label: string }>;
      }
  >;
  value: T | null;
  onChange: (value: T | null) => void;
};
export const SelectContent = <T,>({
  options,
  value,
  onChange,
}: DropdownMenuProps<T>) => {
  const { isOpen, close, setOption, selectRef } = useSelectContext();

  const onItemClick = ({
    label,
    value,
  }: {
    label: string;
    value: T | null;
  }) => {
    onChange(value);
    close();
    setOption({ label, value });
  };

  useEffect(() => {
    if (value !== null) {
      const label = getOptionLabel(options, value);
      setOption({ label: label ?? "", value });
    }
  }, [value, setOption, options]);
  return isOpen ? (
    <div className="select-dropdown-menu-container" ref={selectRef}>
      <ul className="select-dropdown-menu-list scrollbar">
        <li
          value="null"
          onClick={() => onItemClick({ label: "Tất cả", value: null })}
          className={cn("select-dropdown-menu-list-item", {
            "select-dropdown-menu-list-item-selected": value === null,
          })}
        >
          Tất cả
        </li>
        {options.map((item, index) => {
          if ("options" in item) {
            return (
              <SelectGroupItem
                value={value}
                key={index}
                label={item.label}
                options={item.options}
                onChange={onChange}
              />
            );
          }
          return (
            <div key={index}>
              <SelectItem
                selected={value === item.value}

                onClick={() =>
                  onItemClick({ label: item.label, value: item.value })
                }
                label={item.label}
              />
            </div>
          );
        })}
      </ul>
    </div>
  ) : null;
};
