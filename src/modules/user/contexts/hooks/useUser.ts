import { UserProfile } from "@shared/user-profile";

import { useUsersQuery } from "./useUsersQuery";

export function useUser() {
  const {
    data: users = [],
    isFetching,
    isPending,
    isSuccess,
  } = useUsersQuery();
  const { profile } = UserProfile.use();

  const visibleUsers = users.filter(
    (user) => user.taiKhoan !== profile.taiKhoan,
  );
  return {
    users: visibleUsers,
    isFetching,
    isPending,
    isSuccess,
  };
}

export type returnUseUser = ReturnType<typeof useUser>;
