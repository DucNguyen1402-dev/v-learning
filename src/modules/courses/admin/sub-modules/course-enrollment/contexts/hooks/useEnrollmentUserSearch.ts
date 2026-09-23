import { useState } from "react";

import type { EnrollmentUser } from "../../types";

type useSearchUserParams = {
  unenrolledUsers: EnrollmentUser[];
};
export const useEnrollmentUserSearch = ({
  unenrolledUsers,
}: useSearchUserParams) => {
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
