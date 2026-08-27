import { useSelectContext } from "../contexts";
import { SelectItem } from "./SelectItem";

type SelectGroupItemProps = {
  label: string;
  options: Array<{ value: string | number; label: string }>;
  onChange: (value: string | number) => void;
  value: string | number | null;
};
export const SelectGroupItem = ({
  label,
  options,
  onChange,
  value,
}: SelectGroupItemProps) => {
  const { close, setOption } = useSelectContext();

  const onItemClick = ({
    label,
    value,
  }: {
    label: string;
    value: string | number;
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
