import { createContext } from "react";

import { type UseEditUserReturn } from "./hooks";

export const EditUserContext = createContext<UseEditUserReturn | null>(null);
