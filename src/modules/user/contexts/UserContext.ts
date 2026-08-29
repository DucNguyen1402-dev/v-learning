import { createContext } from "react";

import type { returnUseUser } from "./hooks";
export const UserContext = createContext<returnUseUser | null>(null);
