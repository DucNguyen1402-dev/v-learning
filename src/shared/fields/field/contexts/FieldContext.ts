import { createContext } from "react";

import type { FieldContextValues } from "./FieldContextValues";

export const FieldContext = createContext<FieldContextValues | null>(null);
