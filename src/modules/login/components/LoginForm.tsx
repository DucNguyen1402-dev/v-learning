import { Link } from "react-router-dom";

import { FormLabel, Input, PasswordField } from "@shared/fields";
const LoginForm = () => {
  return (
    <form className="space-y-4" noValidate>
      <div className="flex flex-col gap-3">
        <FormLabel htmlFor="account">TÀI KHOẢN</FormLabel>
        <Input id="email" name="account" />
      </div>

      <div className="mb-1.5 flex flex-col gap-3">
        <FormLabel htmlFor="password">MẬT KHẨU</FormLabel>

        <PasswordField id="password" name="password" />

        <Link to="/client/password-reset" className="self-end link-secondary">
          Quên mật khẩu?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
