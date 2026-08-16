import { createContext } from "react";

import type { UseRegisterReturn } from "./hooks";

export const RegisterContext = createContext<UseRegisterReturn | null>(null);
