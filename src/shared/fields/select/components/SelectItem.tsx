import { cn } from "@shared/utils";
type SelectItemProps = {
  value: string | number;
  label: string;
  onClick: () => void;
  selected: boolean;
};

export const SelectItem = ({
  value,
  label,
  onClick,
  selected,
}: SelectItemProps) => (
  <li
    key={value}
    className={cn("select-dropdown-menu-list-item", {
      "select-dropdown-menu-list-item-selected": selected,
    })}
    onClick={onClick}
  >
    {label}
  </li>
);
