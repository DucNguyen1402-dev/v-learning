import { Link } from "react-router-dom";

import { Login } from "@modules/login";
import { FormLabel, Input, PasswordField } from "@shared/fields";
import { accountValidationRules } from "@shared/validation";
export const LoginForm = () => {
  const {
    hookForm: { register, errors },
  } = Login.use();

  return (
    <form className="space-y-4" noValidate>
      <div className="flex flex-col gap-3">
        <FormLabel htmlFor="taiKhoan">TÀI KHOẢN</FormLabel>
        <Input
          id="taiKhoan"
          {...register("taiKhoan", accountValidationRules.taiKhoan)}
          error={errors.taiKhoan?.message}
        />
      </div>

      <div className="mb-1.5 flex flex-col gap-3">
        <FormLabel htmlFor="matKhau">MẬT KHẨU</FormLabel>

        <PasswordField
          id="matKhau"
          {...register("matKhau", accountValidationRules.matKhau)}
          error={errors.matKhau?.message}
        />

        <Link to="/client/password-reset" className="self-end link-secondary">
          Quên mật khẩu?
        </Link>
      </div>
    </form>
  );
};
