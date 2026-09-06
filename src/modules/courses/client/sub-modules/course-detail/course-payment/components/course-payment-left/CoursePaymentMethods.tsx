import { useMemo } from "react";

import { Field, FIELD_LAYOUT, Radio } from "@shared/fields";

import { useCoursePaymentContext } from "../../context";
export const CoursePaymentMethods = () => {
  const paymentMethods = useMemo(
    () => [
      { name: "qr", label: "Chuyển khoản Ngân hàng (Mã QR)", checked: true },
      { name: "momo", label: "Ví MoMo", checked: false },
      { name: "vnpay", label: "VNPAY-QR", checked: false },
    ],
    [],
  );

  const { selectedMethod, onPaymentMethodChange } = useCoursePaymentContext();

  return (
    <div className="flex h-full flex-col gap-6 rounded-container border-border-subtle bg-bg-default p-6 py-8 shadow-surface">
      <h2 className="text-lg font-semibold">2. Chọn phương thức thanh toán</h2>

      <div className="flex flex-col gap-4">
        {paymentMethods.map((method) => (
          <Field.Root key={method.name} layout={FIELD_LAYOUT.HORIZONTAL}>
            <Field.FieldLabel
              target={method.name}
              selected={selectedMethod === method.name}
            >
              <Radio
                id={method.name}
                name="payment"
                checked={selectedMethod === method.name}
                onChange={() => onPaymentMethodChange(method.name)}
              />
              <Field.Label target={method.name} text={method.label} />
            </Field.FieldLabel>
          </Field.Root>
        ))}
      </div>
    </div>
  );
};
