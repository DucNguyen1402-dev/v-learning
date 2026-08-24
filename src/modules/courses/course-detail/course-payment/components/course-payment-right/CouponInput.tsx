import { useState } from "react";

export const CouponInput = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [appliedCoupon, setAppliedCoupon] = useState<boolean>(false);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to apply coupon code
    if (couponCode === "FRONTEND") {
      setAppliedCoupon(true);
    } else {
      setAppliedCoupon(false);
    }
  };
  return (
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
  );
};
