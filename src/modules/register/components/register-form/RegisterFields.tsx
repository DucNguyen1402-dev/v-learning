import { useMemo } from "react";

import { useRegisterContext } from "@modules/register/contexts";
import { registerValidationRules } from "@shared/auth";
import { Field, Input } from "@shared/fields";

export const RegisterFields = () => {
  const {
    form: { register, getFieldState },
    constants: { REGISTER_FIELD_NAMES },
  } = useRegisterContext();

  const registerFields = useMemo(
    () => [
      {
        label: "TÀI KHOẢN",
        name: REGISTER_FIELD_NAMES.taiKhoan,
        type: "text",
        required: true,
      },
      {
        label: "MẬT KHẨU",
        name: REGISTER_FIELD_NAMES.matKhau,
        type: "password",
        required: true,
      },
      {
        label: "HỌ VÀ TÊN",
        name: REGISTER_FIELD_NAMES.hoTen,
        type: "text",
        required: true,
      },
      {
        label: "EMAIL",
        name: REGISTER_FIELD_NAMES.email,
        type: "email",
        required: true,
      },
      {
        label: "SỐ ĐIỆN THOẠI",
        name: REGISTER_FIELD_NAMES.soDT,
        type: "number",
        required: false,
      },
    ],
    [REGISTER_FIELD_NAMES],
  );
  console.log(
    "registerFields",
    getFieldState(REGISTER_FIELD_NAMES.taiKhoan).error?.message,
  );
  return (
    <div className="flex flex-col gap-5">
      {registerFields.map(({ name, required, label, type }) => (
        <Field.Root key={name}>
          <Field.Label target={name} text={label} required={required} />
          <Input.Root>
            <Input.Field
              id={name}
              type={type}
              invalid={getFieldState(name).invalid}
              {...register(name, registerValidationRules[name])}
            />
            {type === "password" && <Input.PasswordVisibilityToggle />}
          </Input.Root>
          <Field.ErrorMessage message={getFieldState(name).error?.message} />
        </Field.Root>
      ))}
    </div>
  );
};
