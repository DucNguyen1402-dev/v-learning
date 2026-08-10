import type { ComponentType, ReactNode, SVGProps } from "react";

import clsx from "clsx";
import { Plus } from "lucide-react";

import { Button } from "./Button";

type AddButtonProps = {
  children: ReactNode;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
} & React.ComponentProps<typeof Button>;

export const AddButton = ({
  children,
  Icon = Plus,
  ...props
}: AddButtonProps) => {
  return (
    <Button icon={Icon} className={clsx("button-primary")} {...props}>
      {children}
    </Button>
  );
};
