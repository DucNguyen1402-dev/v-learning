import type { EnrichedPersonalCourse } from "@modules/personal-courses/mocks";

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
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-6">
        <div className="col-span-4">
          <PersonalCourseImage
            image={targetCourse.descriptionImage}
            tenKhoaHoc={targetCourse.tenKhoaHoc}
          />
        </div>
        <div className="col-span-2">
          <PersonalCourseInfo
            tenGiangVien={targetCourse.tenGiangVien}
            soLuongHocVien={targetCourse.soLuongHocVien}
            luotXem={targetCourse.luotXem}
            danhGia={targetCourse.danhGia}
          />
        </div>
      </div>
      <div className="mt-6">
        <PersonalCourseDescription moTa={targetCourse.moTa} />
      </div>
    </div>
  );
};
