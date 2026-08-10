import { createContext } from "react";

import type { AvatarContextValue } from "./AuthContextValue";
export const AuthContext = createContext<AvatarContextValue | null>(null);
