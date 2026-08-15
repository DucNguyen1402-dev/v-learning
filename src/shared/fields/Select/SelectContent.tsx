import { SelectGroupItem, SelectItem } from "./components";
import { useSelectContext } from "./contexts";

type DropdownMenuProps = {
  options: Array<
    | { value: string | number; label: string }
    | {
        label: string;
        options: Array<{ value: string | number; label: string }>;
      }
  >;
  value: string | number | null;
  onChange: (value: string | number) => void;
};
export const SelectContent = ({
  options,
  value,
  onChange,
}: DropdownMenuProps) => {
  const { isOpen, close, setValue } = useSelectContext();

  const onItemClick = (value: string | number) => {
    onChange(value);
    close();
    setValue(value);
  };
  return isOpen ? (
    <div className="select-dropdown-menu-container">
      <ul className="select-dropdown-menu-list scrollbar">
        {options.map((item) => {
          if ("options" in item) {
            return (
              <SelectGroupItem
                value={value}
                key={item.label}
                label={item.label}
                options={item.options}
                onChange={onChange}
              />
            );
          }
          return (
            <SelectItem
              selected={value === item.value}
              key={item.value}
              value={item.value}
              onClick={() => onItemClick(item.value)}
              label={item.label}
            />
          );
        })}
      </ul>
    </div>
  ) : null;
};
