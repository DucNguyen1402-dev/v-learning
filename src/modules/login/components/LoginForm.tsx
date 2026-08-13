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
        <Field.Label target="taiKhoan" text="TÀI KHOẢN" />
        <Input.Root>
          <Input.Field
            id="taiKhoan"
            {...register("taiKhoan", accountValidationRules.taiKhoan)}
          />
          <Field.ErrorMessage message={errors.taiKhoan?.message} />
        </Input.Root>
      </Field.Root>

      <Field.Root>
        <Field.Label target="matKhau" text="MẬT KHẨU" />
        <Input.Root>
          <Input.Field
            id="matKhau"
            type="password"
            {...register("matKhau", accountValidationRules.matKhau)}
          />
          <Input.PasswordVisibilityToggle />
        </Input.Root>
        <Field.ErrorMessage message={errors.matKhau?.message} />
      </Field.Root>
    </form>
  );
};
