import type { ReactNode } from "react";

import { cn } from "@shared/utils";

import { FieldProvider } from "./contexts";

type FieldRootProps = {
  children: ReactNode;
  layout?: FieldLayout;
};

import { FIELD_LAYOUT } from "./constants";
import type { FieldLayout } from "./types";
export const FieldRoot = ({
  children,
  layout = FIELD_LAYOUT.VERTICAL,
}: FieldRootProps) => {
  return (
    <div
      className={cn("field-root", {
        "field-root-vertical": layout === FIELD_LAYOUT.VERTICAL,
        "field-root-horizontal": layout === FIELD_LAYOUT.HORIZONTAL,
      })}
    >
      <FieldProvider layout={layout}>{children}</FieldProvider>
    </div>
  );
};
