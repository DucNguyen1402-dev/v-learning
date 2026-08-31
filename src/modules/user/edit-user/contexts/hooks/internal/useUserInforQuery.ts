import { findUser } from "@modules/user/edit-user/api";
import { useQuery } from "@tanstack/react-query";

export const useUserInforQuery = (taiKhoan: string) =>
  useQuery({
    queryKey: ["userInfo", taiKhoan],
    queryFn: () => findUser(taiKhoan),
  });
