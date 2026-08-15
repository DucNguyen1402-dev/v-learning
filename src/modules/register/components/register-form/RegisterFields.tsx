import { Field, Input } from "@shared/fields";

export const RegisterFields = () => {
  const fields = [
    {
      label: "Tài khoản",
      name: "taiKhoan",
      type: "text",
      invalid: "",
      errorMessage: "",
    },
    {
      label: "Mật khẩu",
      name: "matKhau",
      type: "password",
      invalid: "",
      errorMessage: "",
    },
    {
      label: "Họ và tên",
      name: "hoTen",
      type: "text",
      invalid: "",
      errorMessage: "",
    },
    {
      label: "Số điện thoại",
      name: "soDT",
      type: "number",
      invalid: "",
      errorMessage: "",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "",
      invalid: "",
      errorMessage: "",
    },
  ];

  return (
    <form>
      {fields.map((field) => (
        <Field.Root>
          <Field.Label target={field.name} text={field.label} />
          <Input.Root>
            <Input.Field id={field.name} name={field.name} type={field.type} />
            {field.type === "password" && <Input.PasswordVisibilityToggle />}
          </Input.Root>
          <Field.ErrorMessage message={undefined} />
        </Field.Root>
      ))}
    </form>
  );
};
