import { useState } from "react";

import type { UnenrolledUser } from "@modules/courses/admin/enroll-user/types";

type useSearchUserParams = {
  unenrolledUsers: UnenrolledUser[];
};
export const useSearchUser = ({ unenrolledUsers }: useSearchUserParams) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  const filteredUsers = unenrolledUsers.filter(
    (user) =>
      user.taiKhoan.toLowerCase().includes(keyword.toLowerCase()) ||
      user.hoTen.toLowerCase().includes(keyword.toLowerCase()),
  );

  return {
    keyword,
    handleSearch,
    filteredUsers,
  };
};
