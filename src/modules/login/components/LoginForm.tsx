import { loginFields } from "@modules/login/config";
import { useLoginContext } from "@modules/login/contexts";
import { loginValidationRules } from "@modules/login/validation";
import {
  Checkbox,
  CHECKBOX_SIZE,
  Field,
  FIELD_LAYOUT,
  Input,
} from "@shared/fields";
export const LoginForm = () => {
  const {
    form: { register, registerFieldState },
    state: { remember, toggleRemember },
  } = useLoginContext();

  return (
    <form className="space-form-lg" noValidate>
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

      <Field.Root layout={FIELD_LAYOUT.HORIZONTAL}>
        <Checkbox
          id="remember"
          checked={remember}
          onCheckedChange={toggleRemember}
          size={CHECKBOX_SIZE.SMALL}
        />

        <Field.Label target="remember" text="Ghi nhớ đăng nhập" />
      </Field.Root>
    </form>
  );
};
