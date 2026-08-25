import { createContext } from "react";

import type { UseLayoutReturnType } from "./hooks";

export const LayoutContext = createContext<UseLayoutReturnType | null>(null);
