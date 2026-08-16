import { createContext } from "react";

import type { UseRegisterReturnValues } from "./hooks";

export const RegisterContext = createContext<UseRegisterReturnValues | null>(
  null,
);
