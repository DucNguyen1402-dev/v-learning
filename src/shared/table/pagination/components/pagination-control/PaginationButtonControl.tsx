import type { ComponentType } from "react";

import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";
type PaginationButtonControlProps = {
  disabled: boolean;
  onClick: () => void;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
};
export const PaginationButtonControl = ({
  disabled,
  onClick,
  icon: Icon,
}: PaginationButtonControlProps) => (
  <Button
    disabled={disabled}
    intent={BUTTON_INTENTS.SECONDARY}
    appearance={BUTTON_APPEARANCES.OUTLINE}
    size={BUTTON_SIZES.SMALL}
    onClick={onClick}
  >
    <Icon className="pagination-control-action-icon" />
  </Button>
);
