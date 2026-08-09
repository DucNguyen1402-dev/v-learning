import { createContext } from "react";

import type { LoadingContextValues } from "./LoadingContextValues";

export const LoadingContext = createContext<LoadingContextValues | null>(null);
