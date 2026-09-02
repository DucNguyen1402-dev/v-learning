import { useEffect, useRef } from "react";

import QRCode from "qrcode";

import { useCoursePaymentContext } from "../../context";
export const PaymentGateway = ({ paymentMethod = "qr" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { selectedMethod: selectedPaymentMethod } = useCoursePaymentContext();

  useEffect(() => {
    if (!canvasRef.current) return;

    QRCode.toCanvas(canvasRef.current, "https://google.com", {
      width: 160,
      margin: 2,
    });
  }, [selectedPaymentMethod]);

  return selectedPaymentMethod === "qr" ? (
    <div className="flex flex-col gap-3 rounded-overlay border border-dashed border-border-subtle bg-bg-subtle p-4 text-center">
      <p className="text-xs text-text-subtle">
        Thông tin thanh toán chỉ mang tính demo.
      </p>

      <div className="mx-auto flex w-40 items-center justify-center rounded-lg border bg-white p-2 shadow-sm">
        <div className="flex h-full w-full items-center justify-center rounded bg-slate-900 text-center text-xs text-white">
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-1 text-xs text-text-subtle md:flex-row">
        <span>Chủ tài khoản:</span>
        <span className="font-semibold">CONG TY CONG NGHE A</span>
      </div>
    </div>
  ) : (
    <div className="rounded-overlay border border-border-subtle bg-bg-subtle p-4 text-center text-xs text-text-subtle">
      Bạn sẽ được chuyển hướng sang cổng thanh toán{" "}
      <span className="font-bold uppercase">{paymentMethod}</span> sau khi nhấn
      xác nhận. (Lưu ý: thông tin thanh toán chỉ mang tính demo)
    </div>
  );
};
