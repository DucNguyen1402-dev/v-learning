import { Sparkles } from "lucide-react";

export const PromotionBadge = () => {
  return (
    <div className="flex items-center gap-1.5 rounded-pill border border-border-promotion bg-bg-promotion px-3 py-1 text-xs font-semibold text-text-promotion select-none">
      <Sparkles className="size-3.5" />
      <span>Ưu đãi có thời hạn</span>
    </div>
  );
};
