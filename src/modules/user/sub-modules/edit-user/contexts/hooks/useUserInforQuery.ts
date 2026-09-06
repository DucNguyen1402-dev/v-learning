import { useQuery } from "@tanstack/react-query";

import { findUser } from "../../api";

export const useUserInforQuery = (taiKhoan: string) =>
  useQuery({
    queryKey: ["userInfo", taiKhoan],
    queryFn: () => findUser(taiKhoan),
  });
