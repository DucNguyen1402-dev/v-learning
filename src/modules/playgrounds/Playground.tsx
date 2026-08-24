import React, { useState } from "react";

// Types
type PaymentMethod = "qr" | "momo" | "vnpay";

interface CourseInfo {
  title: string;
  instructor: string;
  originalPrice: number;
  discount: number;
  code: string;
}

export const Playground = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("qr");
  const [couponCode, setCouponCode] = useState<string>("");
  const [appliedCoupon, setAppliedCoupon] = useState<boolean>(false);

  // Fake user info state
  const [userInfo, setUserInfo] = useState({
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0901234567",
  });

  // Dummy course data
  const course: CourseInfo = {
    title: "Lập trình Frontend Chuyên Nghiệp từ Zero đến Hero",
    instructor: "Nguyễn Văn B",
    originalPrice: 1200000,
    discount: 400000,
    code: "HOCHOC12345",
  };

  const finalPrice =
    course.originalPrice - course.discount - (appliedCoupon ? 100000 : 0);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "FRONTEND") {
      setAppliedCoupon(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 font-sans text-slate-800 antialiased">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">
          Thanh toán khóa học
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Cột trái: Thông tin học viên & Phương thức thanh toán */}
          <div className="space-y-6 md:col-span-7">
            {/* 1. Thông tin học viên */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">
                1. Thông tin tài khoản
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Họ và tên
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={userInfo.fullName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Email nhận khóa học
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </form>
            </div>

            {/* 2. Chọn phương thức thanh toán */}
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
          </div>

          {/* Cột phải: Tóm tắt đơn hàng & QR */}
          <div className="space-y-6 md:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">
                Tóm tắt đơn hàng
              </h2>

              {/* Thông tin khóa học */}
              <div className="mb-4 flex gap-4 border-b border-slate-100 pb-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-slate-200 text-[10px] font-bold text-slate-500">
                  THUMBNAIL
                </div>
                <div>
                  <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Giảng viên: {course.instructor}
                  </p>
                </div>
              </div>

              {/* Mã giảm giá */}
              <form onSubmit={handleApplyCoupon} className="mb-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Nhập mã (thử: FRONTEND)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm uppercase focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                >
                  Áp dụng
                </button>
              </form>

              {/* Bảng tính tiền */}
              <div className="mb-4 space-y-2 border-b border-slate-100 pb-4 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Giá gốc:</span>
                  <span className="line-through">
                    {course.originalPrice.toLocaleString("vi-VN")} đ
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Giảm giá khóa học:</span>
                  <span className="text-emerald-600">
                    -{course.discount.toLocaleString("vi-VN")} đ
                  </span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-slate-600">
                    <span>Voucher áp dụng:</span>
                    <span className="text-emerald-600">-100.000 đ</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-slate-100 pt-2 text-base font-bold text-slate-900">
                  <span>Tổng thanh toán:</span>
                  <span className="text-blue-600">
                    {finalPrice.toLocaleString("vi-VN")} đ
                  </span>
                </div>
              </div>

              {/* Khu vực QR / Hướng dẫn thanh toán */}
              {paymentMethod === "qr" ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center">
                  <p className="mb-2 text-xs text-slate-500">
                    Quét mã bằng app ngân hàng để hoàn tất
                  </p>
                  <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-lg border bg-white p-2 shadow-sm">
                    {/* Frame giả lập mã QR */}
                    <div className="flex h-full w-full items-center justify-center rounded bg-slate-900 text-center font-mono text-xs text-white">
                      [ QR CODE ]
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 text-xs text-slate-600">
                    <p>
                      Nội dung CK:{" "}
                      <span className="font-mono font-bold text-blue-600">
                        {course.code}
                      </span>
                    </p>
                    <p>
                      Chủ tài khoản:{" "}
                      <span className="font-semibold">CONG TY CONG NGHE A</span>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center text-xs text-slate-600">
                  Bạn sẽ được chuyển hướng sang cổng thanh toán{" "}
                  <span className="font-bold uppercase">{paymentMethod}</span>{" "}
                  sau khi nhấn xác nhận.
                </div>
              )}

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
              >
                Xác nhận thanh toán
              </button>

              <p className="mt-3 text-center text-[11px] text-slate-400">
                Bằng việc thanh toán, bạn đồng ý với Điều khoản dịch vụ của
                chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
