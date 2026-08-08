import { Login } from "@modules/login";
import { LoginPage } from "@modules/login/pages/LoginPage";

export const LoginRoute = () => (
  <Login.Provider>
    <LoginPage />
  </Login.Provider>
);
