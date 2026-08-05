import { createContext } from "react";

import type { LoginContextValue } from "./LoginContextValue";
export const LoginContext = createContext<LoginContextValue | null>(null);
