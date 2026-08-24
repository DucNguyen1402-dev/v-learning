import { useEffect, useRef } from "react";

import QRCode from "qrcode";
export const PaymentGateway = ({ paymentMethod = "qr" }) => {
  const course = {
    code: "KH-001",
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    QRCode.toCanvas(canvasRef.current, "https://google.com", {
      width: 160,
      margin: 2,
    });
  }, []);

  return paymentMethod === "qr" ? (
    <div className="flex flex-col gap-3 rounded-overlay border border-dashed border-border-subtle bg-bg-subtle p-4 text-center">
      <p className="text-xs text-text-subtle">
        Quét mã bằng app ngân hàng để hoàn tất
      </p>

      <div className="mx-auto flex w-40 items-center justify-center rounded-lg border bg-white p-2 shadow-sm">
        <div className="flex h-full w-full items-center justify-center rounded bg-slate-900 text-center text-xs text-white">
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-xs text-text-subtle">
        <div className="flex justify-center gap-2">
          <span> Nội dung CK:</span>
          <span className="self-end text-[10px] font-bold text-blue-600">
            {course.code}
          </span>
        </div>
        <div className="flex flex-col justify-center gap-1 md:flex-row">
          <span>Chủ tài khoản:</span>
          <span className="font-semibold">CONG TY CONG NGHE A</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="rounded-overlay border border-border-subtle bg-bg-subtle p-4 text-center text-xs text-text-subtle">
      Bạn sẽ được chuyển hướng sang cổng thanh toán{" "}
      <span className="font-bold uppercase">{paymentMethod}</span> sau khi nhấn
      xác nhận.
    </div>
  );
};
