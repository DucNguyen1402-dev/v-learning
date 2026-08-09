import { createContext } from "react";

import type { LayoutContextValues } from "./LayoutContextValues";
export const LayoutContext = createContext<LayoutContextValues | null>(null);
