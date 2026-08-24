import { useEffect, useState } from "react";

import { Clock } from "lucide-react";
export const PromotionCountdown = ({
  deadlineHours,
}: {
  deadlineHours: number;
}) => {
  const [timeLeft, setTimeLeft] = useState(deadlineHours * 3600);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-control border border-border-subtle bg-bg-subtle p-3 text-xs select-none">
      <div className="flex items-center gap-2 font-medium text-slate-600">
        <Clock className="h-4 w-4 animate-pulse text-text-muted" />
        <span>Ưu đãi kết thúc sau:</span>
      </div>
      <span className="flex w-18 items-center justify-center rounded-control border border-border-muted bg-bg-muted px-2 py-1 text-xs font-medium text-text-muted">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
};
