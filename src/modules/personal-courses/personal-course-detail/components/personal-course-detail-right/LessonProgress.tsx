import type { BaiHoc } from "@modules/personal-courses/types";

interface LessonProgressCardProps {
  baiHoc: BaiHoc;
}

export const LessonProgress = ({ baiHoc }: LessonProgressCardProps) => {
  const percent =
    Math.round((baiHoc.daHoanThanh / baiHoc.tongSoBaiHoc) * 100) || 0;

  return (
    <div className="rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface">
      <div className="flex items-center justify-between pb-3">
        <h3 className="text-lg font-semibold">Tiến độ bài học</h3>
        <span className="rounded-pill bg-bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-text-brand">
          {percent}%
        </span>
      </div>

      <div className="relative h-2.5 overflow-hidden rounded-pill bg-bg-subtle select-none">
        <div
          className="relative h-full overflow-hidden rounded-pill bg-bg-brand"
          style={{ width: `${percent}%` }}
        >
          <div className="absolute inset-y-0 -left-full w-1/2 animate-[shimmer_2.5s_linear_infinite] bg-linear-to-r from-transparent via-bg-brand-subtle to-transparent" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border-subtle pt-4">
        <div className="text-center">
          <p className="text-xs font-medium text-text-subtle">Tổng số</p>
          <p className="mt-1 text-sm font-bold">{baiHoc.tongSoBaiHoc}</p>
        </div>

        <div className="border-x border-border-subtle text-center">
          <p className="text-xs font-medium text-text-subtle">Đã xong</p>
          <p className="mt-1 text-sm font-bold text-text-completed">
            {baiHoc.daHoanThanh}
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs font-medium text-text-subtle">Chưa xong</p>
          <p className="mt-1 text-sm font-bold text-text-incomplete">
            {baiHoc.chuaHoanThanh}
          </p>
        </div>
      </div>
    </div>
  );
};
