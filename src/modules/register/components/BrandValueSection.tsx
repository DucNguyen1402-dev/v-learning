import { useMemo } from "react";

import { EducationLogo, LOGO_SIZES } from "@shared/logo";
import { CircleCheckBig } from "lucide-react";

export const BrandValueSection = () => {
  const bullets = useMemo(
    () => [
      "Tạo tài khoản nhanh chóng chỉ trong vài giây.",
      "Truy cập miễn phí các bài học cơ bản.",
      "Theo dõi tiến độ học tập của bạn bất cứ lúc nào.",
      "Học và thực hành ở bất cứ đâu chỉ với trình duyệt web.",
    ],
    [],
  );
  return (
    <div className="hidden flex-col gap-10 md:flex">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <EducationLogo size={LOGO_SIZES.SMALL} />
          <span className="text-xs font-semibold tracking-widest lg:text-sm">
            THAM GIA V-LEARNING
          </span>
        </div>
        <h1 className="text-2xl leading-tight font-bold lg:text-4xl">
          Bắt đầu hành trình làm chủ kỹ năng lập trình.
        </h1>
        <p className="text-[14px] leading-relaxed text-text-subtle lg:text-sm">
          Tạo tài khoản để bắt đầu học với kho bài học cơ bản miễn phí và môi
          trường thực hành trực tiếp trên trình duyệt.
        </p>
      </div>

      <div className="flex flex-col gap-3 border-t border-border-subtle pt-6 text-[13px] text-text-subtle lg:text-sm">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-center gap-2">
            <CircleCheckBig className="size-4 text-text-available" />
            <span>{bullet}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
