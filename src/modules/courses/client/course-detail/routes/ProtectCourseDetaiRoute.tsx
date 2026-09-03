import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Navigation } from "@shared/navigation";

type ProtectCourseDetailRouteProps = {
  children: React.ReactNode;
};

export const ProtectCourseDetailRoute = ({
  children,
}: ProtectCourseDetailRouteProps) => {
  const { maKhoaHoc } = useParams<{ maKhoaHoc: string }>();
  const { go } = Navigation.hooks.useNavigate();

  useEffect(() => {
    if (!maKhoaHoc) {
      go({
        routeKey: Navigation.client.keys.COURSES,
      });
    }
  }, [maKhoaHoc, go]);

  if (!maKhoaHoc) {
    return null;
  }

  return <>{children}</>;
};
