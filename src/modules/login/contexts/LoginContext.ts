import { createContext } from "react";

import type { LoginContextValues } from "./LoginContextValues";

export const LoginContext = createContext<LoginContextValues | null>(null);
