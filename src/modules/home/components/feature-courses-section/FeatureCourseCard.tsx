import { Navigation } from "@shared/navigation";
import { Separator } from "@shared/ui";
import { Star } from "lucide-react";
type FeatureCourseCardProps = {
  tenKhoaHoc: string;
  maKhoahoc: string;
  tenDanhMucKhoaHoc: string;
  soLuongHocVien: number;
  danhGia: number;
  luotXem: number;
  thumbnail: string;
};

export const FeatureCourseCard = ({
  tenKhoaHoc,
  maKhoahoc,
  tenDanhMucKhoaHoc,
  soLuongHocVien,
  danhGia,
  thumbnail,
  luotXem,
}: FeatureCourseCardProps) => {
  return (
    <Navigation.components.ForwardWithParam
      routeBuilderKey={Navigation.client.buildersKeys.COURSES_DETAIL}
      param={maKhoahoc}
    >
      <article className="group relative flex cursor-pointer flex-col justify-between rounded-container border border-border-default bg-bg-default p-6 transition-transform duration-300 select-none hover:-translate-y-2 hover:border-border-brand hover:shadow-surface-hover">
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-pill bg-bg-overlay px-2 py-0.5 text-[10px] text-text-on-overlay">
          <span>{danhGia}</span>
          <Star className="size-3.5 fill-current text-text-rating" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="self-start rounded-control-sm bg-bg-overlay px-2 py-0.5 text-[10px] text-text-on-overlay uppercase">
            {tenDanhMucKhoaHoc}
          </div>
          <div className="flex gap-2">
            <img
              src={thumbnail}
              alt={tenKhoaHoc}
              className="w-36 rounded-container"
            />
            <h3 className="text-lg font-semibold">{tenKhoaHoc}</h3>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex items-center justify-between text-xs text-text-subtle">
          <span>{soLuongHocVien} học viên</span>

          <span>{luotXem} lượt xem</span>
        </div>
      </article>
    </Navigation.components.ForwardWithParam>
  );
};
