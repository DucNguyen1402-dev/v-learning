import { useState } from "react";

export const useUserSearchByName = () => {
  const [keyword, setKeyword] = useState<string>("");

  const onSearchByUserName = (name: string) => {
    setKeyword(name ?? "");
  };
  const handleClearSearch = () => {
    setKeyword("");
  };

  return {
    onSearchByUserName,
    handleClearSearch,
    keyword,
  };
};
