import { useContext } from "react";

import { LoginContext } from "./LoginContext";

const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("Login.use() must be use inside <LoginProvider>.");
  }

  return context;
};

export default useLoginContext;
