import { createContext } from "react";

import type { UserContextValues } from "./UserContextValues";
export const UserContext = createContext<UserContextValues | null>(null);
