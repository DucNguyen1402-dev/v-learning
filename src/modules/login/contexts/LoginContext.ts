import { createContext } from "react";

import type { UseLoginReturn } from "./hooks";

export const LoginContext = createContext<UseLoginReturn | null>(null);
