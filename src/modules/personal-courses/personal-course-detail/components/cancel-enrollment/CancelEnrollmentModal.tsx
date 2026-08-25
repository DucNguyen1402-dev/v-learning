import { AlertCircle, X } from "lucide-react"; // Hoặc lucide-react

type CancelEnrollmentModalProps = {
  onClose: () => void;
  onConfirm: () => void;
  tenKhoaHoc: string;
};
export const CancelEnrollmentModal = ({
  onClose,
  onConfirm,

  tenKhoaHoc,
}: CancelEnrollmentModalProps) => {
  const handleConfirm = () => {
    onConfirm();

    onClose();
  };

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm transition-opacity">
      {/* Container */}
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng nhanh */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Soft Warning */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
            <AlertCircle className="h-6 w-6" />
          </div>
          <div className="pr-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Xác nhận hủy ghi danh?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Bạn đang yêu cầu hủy tham gia khóa học{" "}
              <span className="font-medium text-slate-700">{tenKhoaHoc}</span>.
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="mt-5 space-y-4">
          {/* Box thông báo nhỏ hỗ trợ UX */}
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-xs text-slate-600">
            💡 Bạn vẫn có thể gia hạn hoặc đăng ký lại bất kỳ lúc nào.
          </div>

          {/* Lý do hủy (Optional cho UX client) */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">
              Chia sẻ lý do cùng chúng mình (không bắt buộc)
            </label>
            <textarea
              rows={3}

              placeholder="VD: Mình không sắp xếp được thời gian..."
              className="w-full resize-none rounded-xl border border-slate-200 p-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}

            className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-50"
          >
            Giữ lại khóa học
          </button>

          <button
            type="button"
            onClick={handleConfirm}
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-amber-600 focus:ring-2 focus:ring-amber-500/20 focus:outline-none active:bg-amber-700 disabled:opacity-50"
          >
            Hủy ghi danh
          </button>
        </div>
      </div>
    </div>
  );
};
