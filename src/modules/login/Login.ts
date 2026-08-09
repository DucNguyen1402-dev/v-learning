import { LoginProvider, useLoginContext } from "./contexts";

export const Login = {
  use: useLoginContext,
  Provider: LoginProvider,
};
