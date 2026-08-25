import { CheckCircle } from "lucide-react";

export const PromotionList = () => {
  const promoList = [
    "Tặng bộ UI Template & tài liệu thực hành chuẩn doanh nghiệp.",
    "Hỗ trợ giải đáp thắc mắc và sửa lỗi code trong suốt khóa học.",
    "Tặng tài khoản thực hành và hệ thống bài tập nâng cao.",
  ];
  return (
    <ul className="flex flex-col gap-3 border-t border-border-subtle pt-5 text-xs text-text-subtle">
      {promoList.map((text, index) => (
        <li key={index} className="flex items-start gap-2.5">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};
