import { Eye, SquareUser, Star, UsersRound } from "lucide-react";

export const CourseDetailInfo = () => {
  const infoItems = [
    {
      label: "Giảng viên",
      value: "Nguyễn Văn Admin",
      icon: SquareUser,
    },
    {
      label: "Học viên",
      value: 230,
      icon: UsersRound,
    },
    {
      label: "Lượt xem ",
      value: 300,
      icon: Eye,
    },
    {
      label: "Đánh giá",
      value: 4.8,
      icon: Star,
    },
  ];

  return (
    <div className="flex items-center justify-between gap-4 rounded-overlay border-border-subtle bg-bg-subtle px-8 py-5 select-none">
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
