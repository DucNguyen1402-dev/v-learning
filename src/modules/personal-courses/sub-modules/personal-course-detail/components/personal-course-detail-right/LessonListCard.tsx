import type { DanhSachBaiHoc } from "@modules/personal-courses/mocks";
import { Navigation } from "@shared/navigation";
import { CirclePlay } from "lucide-react";

interface LessonListCardProps {
  danhSachBaiHoc: DanhSachBaiHoc;
  maKhoaHoc: string;
}

export const LessonListCard = ({
  danhSachBaiHoc,
  maKhoaHoc,
}: LessonListCardProps) => {
  return (
    <div className="h-full min-w-0 rounded-container border border-border-subtle bg-bg-default p-5 pb-16 shadow-surface md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-default pb-4 sm:pb-5">
        <h3 className="min-w-0 text-lg font-semibold">Danh sách bài học</h3>
        <div className="flex shrink-0 rounded-pill bg-bg-subtle px-4 py-1.5 text-xs font-medium text-text-subtle">
          <span>{danhSachBaiHoc.length} bài</span>
        </div>
      </div>

      <div className="scrollbar mt-3 flex max-h-[min(20rem,45vh)] flex-col gap-1.5 overflow-y-auto pr-1 sm:gap-2">
        {danhSachBaiHoc.map((item, index) => (
          <Navigation.components.ForwardWithParam
            key={index}
            builderRouteKey={
              Navigation.client.builderKeys.PERSONAL_COURSE_DETAIL_PLAYER
            }
            param={maKhoaHoc}
            payload={{ baiHocIndex: index }}
          >
            <div className="group flex w-full min-w-0 items-center justify-between gap-2 rounded-overlay px-2 py-2 transition-colors duration-200 hover:bg-bg-brand/10 sm:px-3">
              <div className="flex min-w-0 flex-1 items-center gap-3 pr-2">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-pill bg-bg-subtle text-xs font-semibold text-text-subtle transition-colors duration-200 group-hover:bg-bg-brand/20 group-hover:text-text-brand/80">
                  {index + 1}
                </span>
                <p className="min-w-0 truncate text-sm font-medium transition-colors duration-200 group-hover:text-text-brand">
                  {item.tenBaiHoc}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <span className="shrink-0 text-xs font-medium text-text-subtle transition-colors duration-200 group-hover:text-text-brand">
                  {item.thoiLuong}
                </span>
                <CirclePlay className="size-4.5 shrink-0 text-text-subtle transition-colors duration-200 group-hover:text-text-brand" />
              </div>
            </div>
          </Navigation.components.ForwardWithParam>
        ))}
      </div>
    </div>
  );
};
