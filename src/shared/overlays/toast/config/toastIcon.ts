import {
  BellRing,
  CheckCircle,
  Info,
  TriangleAlert,
  XCircle,
} from "lucide-react";

export const toastIconTypes = {
  success: CheckCircle,
  error: XCircle,
  warning: TriangleAlert,
  info: Info,
  default: BellRing,
} as const;

export const toastIconSizes = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
} as const;
