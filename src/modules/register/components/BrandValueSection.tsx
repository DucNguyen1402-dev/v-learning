export const BrandValueSection = () => {
  return (
    <div className="hidden pr-6 md:block">
      <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
        Tham gia V-learning
      </span>
      <h1 className="mt-3 mb-4 text-3xl leading-tight font-bold text-white lg:text-4xl">
        Bắt đầu hành trình làm chủ tư duy lập trình.
      </h1>
      <p className="mb-6 text-sm leading-relaxed text-neutral-400">
        Tạo tài khoản để tiếp cận các lộ trình học First Principles, hệ thống
        bài tập thực chiến và cộng đồng kỹ sư chất lượng.
      </p>

      <div className="space-y-3 border-t border-neutral-800/80 pt-6 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
          <span>Không yêu cầu thẻ tín dụng khi bắt đầu</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
          <span>Truy cập kho bài học cơ bản miễn phí</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
          <span>Thực hành trực tiếp trên trình duyệt</span>
        </div>
      </div>
    </div>
  );
};
