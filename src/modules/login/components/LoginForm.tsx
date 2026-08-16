import { useLoginContext } from "@modules/login/contexts";
import { loginValidationRules } from "@shared/auth";
import { Field, Input } from "@shared/fields";
export const LoginForm = () => {
  const {
    hookForm: { register, registerFieldState },
    LOGIN_FORM_FIELD_NAMES,
  } = useLoginContext();

  const loginFields = [
    {
      name: LOGIN_FORM_FIELD_NAMES.TAI_KHOAN,
      label: "TÀI KHOẢN",
      type: "text",
    },
    {
      name: LOGIN_FORM_FIELD_NAMES.MAT_KHAU,
      label: "MẬT KHẨU",
      type: "password",
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
              invalid={registerFieldState(field.name).invalid}
              {...register(field.name, loginValidationRules[field.name])}
            />
            {field.type === "password" && <Input.PasswordVisibilityToggle />}
          </Input.Root>
          <Field.ErrorMessage
            message={registerFieldState(field.name).error?.message}
          />
        </Field.Root>
      ))}
    </form>
  );
};
