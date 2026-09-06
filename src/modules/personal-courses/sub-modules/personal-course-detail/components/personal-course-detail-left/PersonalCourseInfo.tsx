import { Eye, SquareUser, Star, UsersRound } from "lucide-react";

export const PersonalCourseInfo = ({
  tenGiangVien,
  soLuongHocVien,
  luotXem,
  danhGia,
}: {
  tenGiangVien: string;
  soLuongHocVien: number;
  luotXem: number;
  danhGia: number;
}) => {
  const infoItems = [
    {
      label: "Giảng viên",
      value: tenGiangVien,
      icon: SquareUser,
    },
    {
      label: "Học viên",
      value: soLuongHocVien,
      icon: UsersRound,
    },
    {
      label: "Lượt xem ",
      value: luotXem,
      icon: Eye,
    },
    {
      label: "Đánh giá",
      value: danhGia,
      icon: Star,
    },
  ];

  return (
    <div className="flex flex-row flex-wrap justify-between gap-6 rounded-overlay border-border-subtle bg-bg-subtle px-8 py-5 select-none lg:flex-col">
      {infoItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <item.icon className="h-4 w-4 text-text-subtle" />
            <span className="text-xs text-text-subtle">{item.label}</span>
          </div>
          <p className="text-sm font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};
