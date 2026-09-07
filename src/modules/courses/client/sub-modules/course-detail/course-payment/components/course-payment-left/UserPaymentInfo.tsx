import { Field, Input } from "@shared/fields";

import { CurrentUser } from "@/shared/current-user";
export const UserPaymentInfo = () => {
  const { profile } = CurrentUser.use();

  const useFieldInfo = [
    { label: "Họ và tên", value: profile.current.hoTen, id: "hoTen" },
    { label: "Email nhận khóa học", value: profile.current.email, id: "email" },
    { label: "Số điện thoại", value: profile.current.soDT, id: "soDT" },
  ];

  const isMobile = window.innerWidth < 768;
  return (
    <div className="flex flex-col gap-6 rounded-container border-border-subtle bg-bg-default p-6 py-8 shadow-surface">
      <h2 className="text-lg font-semibold">
        1. Thông tin tài khoản {isMobile ? "" : "của bạn"}
      </h2>
      <div className="flex flex-col gap-5">
        {useFieldInfo.map((field) => (
          <Field.Root key={field.label}>
            <Field.Label target={field.id} text={field.label} />
            <Input.Root>
              <Input.Field id={field.id} value={field.value} readOnly />
            </Input.Root>
          </Field.Root>
        ))}
      </div>
    </div>
  );
};
