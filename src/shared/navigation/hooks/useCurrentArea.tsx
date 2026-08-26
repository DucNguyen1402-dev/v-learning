import { useLocation } from "react-router-dom";
type AppArea = "client" | "admin";
export const useCurrentArea = (): AppArea => {
  const { pathname } = useLocation();

  if (pathname.startsWith("/client")) return "client";
  if (pathname.startsWith("/admin")) return "admin";

  throw new Error("Unable to determine current app area from pathname.");
};
