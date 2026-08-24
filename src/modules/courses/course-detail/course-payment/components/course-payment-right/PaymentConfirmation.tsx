export const PaymentConfirmation = () => {
  return (
    <div>
      <button
        type="button"
        className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
      >
        Xác nhận thanh toán
      </button>

      <p className="mt-3 text-center text-[11px] text-slate-400">
        Bằng việc thanh toán, bạn đồng ý với Điều khoản dịch vụ của chúng tôi.
      </p>
    </div>
  );
};
