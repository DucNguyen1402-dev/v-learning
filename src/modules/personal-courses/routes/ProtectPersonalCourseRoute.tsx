import { type ReactNode, useEffect } from "react";

import { UserInfor } from "@shared/auth";
import { Navigation } from "@shared/navigation";

type ProtectPersonalCourseRouteProps = {
  children: ReactNode;
};

export const ProtectPersonalCourseRoute = ({
  children,
}: ProtectPersonalCourseRouteProps) => {
  const { infor, isPending } = UserInfor.useQuery();
  const { go } = Navigation.hooks.useNavigate();

  useEffect(() => {
    if (isPending) return;
    if (!infor) {
      go(Navigation.client.keys.LOGIN);
    }
  }, [go, infor, isPending]);

  if (!infor) return null;

  return children;
};
