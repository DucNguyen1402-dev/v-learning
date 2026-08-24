import { useState } from "react";

export const CoursePaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = useState<"qr" | "momo" | "vnpay">(
    "qr",
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        2. Chọn phương thức thanh toán
      </h2>

      <div className="space-y-3">
        {/* Chuyển khoản QR */}
        <label
          className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition ${
            paymentMethod === "qr"
              ? "border-blue-600 bg-blue-50/50"
              : "border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="qr"
              checked={paymentMethod === "qr"}
              onChange={() => setPaymentMethod("qr")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium">
              Chuyển khoản Ngân hàng (Mã QR)
            </span>
          </div>
          <span className="rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
            Khuyên dùng
          </span>
        </label>

        {/* Ví Momo */}
        <label
          className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
            paymentMethod === "momo"
              ? "border-blue-600 bg-blue-50/50"
              : "border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="momo"
              checked={paymentMethod === "momo"}
              onChange={() => setPaymentMethod("momo")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium">Ví MoMo</span>
          </div>
        </label>

        {/* Ví VNPay */}
        <label
          className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
            paymentMethod === "vnpay"
              ? "border-blue-600 bg-blue-50/50"
              : "border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="vnpay"
              checked={paymentMethod === "vnpay"}
              onChange={() => setPaymentMethod("vnpay")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium">VNPAY-QR</span>
          </div>
        </label>
      </div>
    </div>
  );
};
