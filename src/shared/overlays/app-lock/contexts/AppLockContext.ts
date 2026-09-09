import { createContext } from "react";

import type { AppLockContextValues } from "./AppLockContextValues";

export const AppLockContext = createContext<AppLockContextValues | null>(null);
