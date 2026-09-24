import { useMemo, useState } from "react";

import type { UnenrolledUser } from "../../types";

type useSearchUserParams = {
  unenrolledUsers: UnenrolledUser[];
};
export const useSearchUser = ({ unenrolledUsers }: useSearchUserParams) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  // keep reference stable across unrelated re-renders to avoid tripping Pagination's resetDeps
  const filteredUsers = useMemo(
    () =>
      unenrolledUsers.filter(
        (user) =>
          user.taiKhoan.toLowerCase().includes(keyword.toLowerCase()) ||
          user.hoTen.toLowerCase().includes(keyword.toLowerCase()),
      ),
    [unenrolledUsers, keyword],
  );

  return {
    keyword,
    handleSearch,
    filteredUsers,
  };
};
