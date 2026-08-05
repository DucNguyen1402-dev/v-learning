import { Login } from "@modules/login/contexts";
import { default as LoginPage } from "@modules/login/pages/LoginPage";

const LoginRoute = () => (
  <Login.Provider>
    <LoginPage />
  </Login.Provider>
);

export default LoginRoute;
