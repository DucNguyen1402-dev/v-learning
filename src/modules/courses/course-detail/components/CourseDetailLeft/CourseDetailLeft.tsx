import { useCourseDetailContext } from "@modules/courses/course-detail/contexts";

import { CourseDetailDescription } from "./CourseDetailDescription";
import { CourseDetailHeading } from "./CourseDetailHeading";
import { CourseDetailImage } from "./CourseDetailImage";
import { CourseDetailInfo } from "./CourseDetailInfo";

export const CourseDetailLeft = () => {
  const { courseDetail } = useCourseDetailContext();

  return (
    <div className="flex flex-col gap-6 rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface lg:p-8">
      <CourseDetailHeading
        tenKhoaHoc={courseDetail.tenKhoaHoc}
        tenDanhMucKhoaHoc={courseDetail.danhMucKhoaHoc.tenDanhMucKhoaHoc}
      />
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex-1">
          <CourseDetailImage image={courseDetail.descriptionImage} />
        </div>
        <CourseDetailInfo
          tenGiangVien={courseDetail.tenGiangVien}
          soLuongHocVien={courseDetail.soLuongHocVien}
          luotXem={courseDetail.luotXem}
          danhGia={courseDetail.danhGia}
        />
      </div>
      <div className="mt-6">
        <CourseDetailDescription moTa={courseDetail.moTa} />
      </div>
    </div>
  );
};
