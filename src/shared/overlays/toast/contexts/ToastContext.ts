import { createContext } from "react";

import type { ToastContextValues } from "./ToastContextValues";

export const ToastContext = createContext<ToastContextValues | null>(null);
