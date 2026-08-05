import { default as LoginProvider } from "./LoginProvider";
import { default as useLoginContext } from "./useLoginContext";

const Login = {
  use: useLoginContext,
  Provider: LoginProvider,
};

export default Login;
