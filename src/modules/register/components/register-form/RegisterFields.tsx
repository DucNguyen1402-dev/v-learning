import { Field, Input } from "@shared/fields";

import { registerFields } from "../../config";
import { useRegisterContext } from "../../contexts";
import { registerValidationRules } from "../../validations";

export const RegisterFields = () => {
  const {
    form: { register, registerFieldState },
  } = useRegisterContext();

  return (
    <div className="flex flex-col gap-5">
      {registerFields.map(({ name, required, label, type }) => (
        <Field.Root key={name}>
          <Field.Label target={name} text={label} required={required} />
          <Input.Root>
            <Input.Field
              id={name}
              type={type}
              invalid={registerFieldState(name).invalid}
              {...register(name, registerValidationRules[name])}
            />
            {type === "password" && <Input.PasswordVisibilityToggle />}
          </Input.Root>
          <Field.ErrorMessage
            message={registerFieldState(name).error?.message}
          />
        </Field.Root>
      ))}
    </div>
  );
};
