import type { EnrichedPersonalCourse } from "@modules/personal-courses/types";

import { PersonalCourseDescription } from "./PersonalCourseDescription";
import { PersonalCourseHeading } from "./PersonalCourseHeading";
import { PersonalCourseImage } from "./PersonalCourseImage";
import { PersonalCourseInfo } from "./PersonalCourseInfo";

export const PersonalCourseDetailLeft = ({
  targetCourse,
}: {
  targetCourse: EnrichedPersonalCourse;
}) => {
  return (
    <div className="flex flex-col gap-6 rounded-container border border-border-subtle bg-bg-default p-6 shadow-surface lg:p-8">
      <PersonalCourseHeading
        tenKhoaHoc={targetCourse.tenKhoaHoc}
        tenDanhMucKhoaHoc={targetCourse.tenDanhMucKhoaHoc}
      />
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex-1">
          <PersonalCourseImage
            image={targetCourse.descriptionImage}
            tenKhoaHoc={targetCourse.tenKhoaHoc}
          />
        </div>
        <PersonalCourseInfo
          tenGiangVien={targetCourse.tenGiangVien}
          soLuongHocVien={targetCourse.soLuongHocVien}
          luotXem={targetCourse.luotXem}
          danhGia={targetCourse.danhGia}
        />
      </div>
      <div className="mt-6">
        <PersonalCourseDescription moTa={targetCourse.moTa} />
      </div>
    </div>
  );
};
