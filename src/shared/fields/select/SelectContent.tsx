import { SelectGroupItem, SelectItem } from "./components";
import { useSelectContext } from "./contexts";
type DropdownMenuProps = {
  options: ReadonlyArray<
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
  const { isOpen, close, setOption, selectRef } = useSelectContext();

  const onItemClick = ({
    label,
    value,
  }: {
    label: string;
    value: string | number;
  }) => {
    onChange(value);
    close();
    setOption({ label, value });
  };

  // useEffect(() => {
  //   if (value !== null) {
  //     setOption({ label: "", value });
  //   }
  // }, [value, setOption]);
  return isOpen ? (
    <div className="select-dropdown-menu-container" ref={selectRef}>
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
              onClick={() =>
                onItemClick({ label: item.label, value: item.value })
              }
              label={item.label}
            />
          );
        })}
      </ul>
    </div>
  ) : null;
};
