import { useSelectContext } from "./contexts";

type DropdownMenuProps = {
  options: Array<
    | { value: string | number; label: string }
    | {
        label: string;
        options: Array<{ value: string | number; label: string }>;
      }
  >;
};
export const SelectContent = ({ options }: DropdownMenuProps) => {
  const { isOpen, close } = useSelectContext();

  return isOpen ? (
    <div className="select-dropdown-menu-container">
      <ul className="select-dropdown-menu-list scrollbar">
        {options.map((item) => {
          if ("options" in item) {
            return (
              <li key={item.label} className="select-dropdown-menu-group">
                <span className="select-dropdown-menu-group-label">
                  {item.label}
                </span>
                <ul className="select-dropdown-menu-group-list">
                  {item.options.map((option) => (
                    <li
                      key={option.value}
                      className="select-dropdown-menu-list-item"
                      onClick={close}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return (
            <li
              key={item.value}
              className="select-dropdown-menu-list-item"
              onClick={close}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};
