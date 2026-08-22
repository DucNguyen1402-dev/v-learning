import { useState } from "react";

export const useCoursesSearchByName = () => {
  const [tenKhoaHoc, setTenKhoaHoc] = useState<string>("");

  const onSearchByCoursesName = (name: string) => {
    setTenKhoaHoc(name ?? "");
  };
  const handleClearSearch = () => {
    setTenKhoaHoc("");
  };

  return {
    onSearchByCoursesName,
    handleClearSearch,
    tenKhoaHoc,
  };
};

export type UseCoursesSearchByNameReturn = ReturnType<
  typeof useCoursesSearchByName
>;
