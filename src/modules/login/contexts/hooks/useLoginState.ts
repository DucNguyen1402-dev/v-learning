import { useState } from "react";

export const useLoginState = () => {
  const [remember, setRemember] = useState(false);

  const toggleRemember = () => setRemember((prev) => !prev);

  return {
    remember,
    toggleRemember,
  };
};
