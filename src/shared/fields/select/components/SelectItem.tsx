import { cn } from "@shared/utils";
type SelectItemProps<T> = {
  value: T;
  label: string;
  onClick: () => void;
  selected: boolean;
};

export const SelectItem = <T,>({
  label,
  onClick,
  selected,
}: SelectItemProps<T>) => (
  <li
    className={cn("select-dropdown-menu-list-item", {
      "select-dropdown-menu-list-item-selected": selected,
    })}
    onClick={onClick}
  >
    {label}
  </li>
);
