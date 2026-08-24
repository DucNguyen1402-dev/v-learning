import { Checkbox, Field } from "@shared/fields";

export const CoursePaymentMethods = () => {
  const paymentMethods = [
    { id: "qr", name: "Chuyển khoản Ngân hàng (Mã QR)" },
    { id: "momo", name: "Ví MoMo" },
    { id: "vnpay", name: "VNPAY-QR" },
  ];

  return (
    <div className="flex flex-col gap-6 rounded-container border-border-subtle bg-bg-default p-6 shadow-surface">
      <h2 className="text-lg font-semibold">2. Chọn phương thức thanh toán</h2>

      <div className="flex flex-col gap-4">
        {paymentMethods.map((method) => (
          <Field.Root key={method.id}>
            <Field.Label target={method.id} text={method.name} />
            <Checkbox
              id={method.id}
              name="payment"
              value={method.id}
              roundedFull
              hideIndicator
            />
          </Field.Root>
        ))}
      </div>
    </div>
  );
};
