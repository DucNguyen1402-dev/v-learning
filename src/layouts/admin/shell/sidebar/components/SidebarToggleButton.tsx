import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
import { cn } from "@shared/utils";
import { Menu } from "lucide-react";
type SidebarToggleButtonProps = {
  onClick: () => void;
  isSidebarOpen: boolean;
};
export const SidebarToggleButton = ({
  onClick,
  isSidebarOpen,
}: SidebarToggleButtonProps) => {
  return (
    <div
      className={cn("sidebar-toggle-container", {
        "sidebar-toggle-container--sidebar-collapsed": !isSidebarOpen,
      })}
    >
      <Button
        appearance={BUTTON_APPEARANCES.GHOST}
        intent={BUTTON_INTENTS.TERTIARY}
        size={BUTTON_SIZES.NONE}

        onClick={onClick}
      >
        <Menu
          className={cn("sidebar-toggle-icon", {
            "sidebar-toggle-icon--sidebar-collapsed": !isSidebarOpen,
          })}
        />
      </Button>
    </div>
  );
};
