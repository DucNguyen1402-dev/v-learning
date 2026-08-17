import { createContext } from "react";

import type { UseSelectReturnType } from "./hooks";

export const SelectContext = createContext<UseSelectReturnType | null>(null);
