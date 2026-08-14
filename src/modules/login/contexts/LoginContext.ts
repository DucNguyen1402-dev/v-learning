import { createContext } from "react";

import type { LoginContextValues } from "./types";

export const LoginContext = createContext<LoginContextValues | null>(null);
