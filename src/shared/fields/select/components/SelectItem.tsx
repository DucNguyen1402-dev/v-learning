import { cn } from "@shared/utils";
type SelectItemProps = {
  label: string;
  onClick: () => void;
  selected: boolean;
};

export const SelectItem = ({ label, onClick, selected }: SelectItemProps) => (
  <li
    className={cn("select-dropdown-menu-list-item", {
      "select-dropdown-menu-list-item-selected": selected,
    })}
    onClick={onClick}
  >
    {label}
  </li>
);
