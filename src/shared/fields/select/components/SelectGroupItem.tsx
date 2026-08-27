import { useSelectContext } from "../contexts";
import { SelectItem } from "./SelectItem";

type SelectGroupItemProps<T> = {
  label: string;
  options: Array<{ value: T; label: string }>;
  onChange: (value: T) => void;
  value: T | null;
};
export const SelectGroupItem = <T,>({
  label,
  options,
  onChange,
  value,
}: SelectGroupItemProps<T>) => {
  const { close, setOption } = useSelectContext();

  const onItemClick = ({
    label,
    value,
  }: {
    label: string;
    value: T;
  }) => {
    onChange(value);
    setOption({ label, value });
    close();
  };

  return (
    <li key={label} className="select-dropdown-menu-group">
      <span className="select-dropdown-menu-group-label">{label}</span>
      <ul className="select-dropdown-menu-group-list">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            selected={value === option.value}
            onClick={() => {
              onItemClick({ label: option.label, value: option.value });
            }}
            label={option.label}
          />
        ))}
      </ul>
    </li>
  );
};
