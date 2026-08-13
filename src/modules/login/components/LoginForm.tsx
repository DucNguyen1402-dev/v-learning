import { Link } from "react-router-dom";

import { Login } from "@modules/login";
import { Field, Input } from "@shared/fields";
import { accountValidationRules } from "@shared/validation";
export const LoginForm = () => {
  const {
    hookForm: { register, errors },
  } = Login.use();

  return (
    <form className="space-y-6" noValidate>
      <Field.Root>
        <Field.Label for="taiKhoan" label="TÀI KHOẢN" />
        <Input.Root>
          <Input.Field
            id="taiKhoan"
            {...register("taiKhoan", accountValidationRules.taiKhoan)}
          />
          <Field.ErrorMessage message={errors.taiKhoan?.message} />
        </Input.Root>
      </Field.Root>

      <Field.Root>
        <Field.Label for="matKhau" label="MẬT KHẨU" />
        <Input.Root>
          <Input.Field
            id="matKhau"
            type="password"
            {...register("matKhau", accountValidationRules.matKhau)}
          />
          <Input.PasswordVisibilityToggle />
          <Field.ErrorMessage message={errors.matKhau?.message} />
        </Input.Root>

        <Link
          to="/client/password-reset"
          className="mt-1 self-end link-secondary"
        >
          Quên mật khẩu?
        </Link>
      </Field.Root>
    </form>
  );
};
