import { createContext } from "react";

import type { SelectContextValues } from "./SelectContextValues";
export const SelectContext = createContext<SelectContextValues | null>(null);
