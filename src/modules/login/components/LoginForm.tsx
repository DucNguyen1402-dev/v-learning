import { useLoginContext } from "@modules/login/contexts";
import { Field, Input } from "@shared/fields";
import {
  type AccountValidationRules,
  accountValidationRules,
} from "@shared/validation";
export const LoginForm = () => {
  const {
    hookForm: { register, getFieldState },
    LOGIN_FORM_FIELD_NAMES,
  } = useLoginContext();

  const taiKhoan = getFieldState(LOGIN_FORM_FIELD_NAMES.TAI_KHOAN);
  const matKhau = getFieldState(LOGIN_FORM_FIELD_NAMES.MAT_KHAU);

  const loginFields: {
    name: (typeof LOGIN_FORM_FIELD_NAMES)[keyof typeof LOGIN_FORM_FIELD_NAMES];
    label: string;
    validation: AccountValidationRules;
    type: string;
    errorMessage?: string;
    invalid: boolean;
  }[] = [
    {
      name: LOGIN_FORM_FIELD_NAMES.TAI_KHOAN,
      label: "TÀI KHOẢN",
      type: "text",
      validation: accountValidationRules.taiKhoan,
      errorMessage: taiKhoan.error?.message,
      invalid: taiKhoan.invalid,
    },
    {
      name: LOGIN_FORM_FIELD_NAMES.MAT_KHAU,
      label: "MẬT KHẨU",
      type: "password",
      validation: accountValidationRules.matKhau,
      errorMessage: matKhau.error?.message,
      invalid: matKhau.invalid,
    },
  ];

  return (
    <form className="space-form-md" noValidate>
      {loginFields.map((field) => (
        <Field.Root key={field.name}>
          <Field.Label target={field.name} text={field.label} />
          <Input.Root>
            <Input.Field
              id={field.name}
              type={field.type}
              invalid={field.invalid}
              {...register(field.name, field.validation)}
            />
            {field.type === "password" && <Input.PasswordVisibilityToggle />}
          </Input.Root>
          <Field.ErrorMessage message={field.errorMessage} />
        </Field.Root>
      ))}
    </form>
  );
};
