import { useLocation } from "react-router-dom";

type GetHistoryRouteParams = {
  location: ReturnType<typeof useLocation>;
};
export const getRouteHistory = ({
  location,
}: GetHistoryRouteParams): string[] => location.state?.history ?? [];
