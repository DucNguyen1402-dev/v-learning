import { createContext } from "react";

import type { InputContextValues } from "./InputContextValues";

export const InputContext = createContext<InputContextValues | null>(null);
