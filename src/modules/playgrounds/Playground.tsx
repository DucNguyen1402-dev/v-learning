import { Field, Input } from "@shared/fields";

export const Playground = () => {
  const fields = [
    {
      label: "Tài khoản",
      name: "taiKhoan",
      type: "text",
    },
    {
      label: "Mật khẩu",
      name: "matKhau",
      type: "password",
    },
    {
      label: "Họ và tên",
      name: "hoTen",
      type: "text",
    },
    {
      label: "Số điện thoại",
      name: "soDT",
      type: "number",
    },
    { label: "Email", name: "email", type: "email", placeholder: "" },
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
