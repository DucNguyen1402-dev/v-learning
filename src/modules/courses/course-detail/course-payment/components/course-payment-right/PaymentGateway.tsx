export const PaymentGateway = ({ paymentMethod = "qr" }) => {
  const course = {
    code: "KH-001",
  };
  return paymentMethod === "qr" ? (
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
      <span className="font-bold uppercase">{paymentMethod}</span> sau khi nhấn
      xác nhận.
    </div>
  );
};
