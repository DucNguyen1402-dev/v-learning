import { SelectGroupItem, SelectItem } from "./components";
import { useSelectContext } from "./contexts";
type DropdownMenuProps<T> = {
  options: ReadonlyArray<
    | { value: T; label: string }
    | {
        label: string;
        options: Array<{ value: T; label: string }>;
      }
  >;
  value: T | null;
  onChange: (value: T) => void;
};
export const SelectContent = <T,>({
  options,
  value,
  onChange,
}: DropdownMenuProps<T>) => {
  const { isOpen, close, setOption, selectRef } = useSelectContext();

  const onItemClick = ({ label, value }: { label: string; value: T }) => {
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
