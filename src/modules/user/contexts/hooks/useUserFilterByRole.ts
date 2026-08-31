import { useMemo, useState } from "react";

import type { User } from "@/modules/user/types";
import type { UserRole } from "@/modules/user/types";

type UseUserFilterByRoleProps = {
  allUsers: User[];
};

export const filterByRole = (users: User[], role: UserRole | null) => {
  if (role === null) return users;
  return users.filter((user) => user.maLoaiNguoiDung === role);
};

export const useUserFilterByRole = ({ allUsers }: UseUserFilterByRoleProps) => {
  const [role, setRole] = useState<UserRole | null>(null);

  const filteredUsers = useMemo(
    () => filterByRole(allUsers, role),
    [allUsers, role],
  );

  const onChangeRole = (newRole: UserRole | null) => setRole(newRole);

  return {
    role,
    onChangeRole,
    filteredUsers,
  };
};
