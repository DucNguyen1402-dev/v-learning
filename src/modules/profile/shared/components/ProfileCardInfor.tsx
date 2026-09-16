import { CurrentUser } from "@/shared/current-user";

export const ProfileCardInfor = () => {
  const { profile } = CurrentUser.use();

  const informations = [
    { label: "Tài khoản", value: profile.current.taiKhoan },
    { label: "Số Điện Thoại", value: profile.current.soDT },
    { label: "Email", value: profile.current.email },
  ];
  return (
    <div className="flex flex-col gap-4 text-[13px]">
      {informations.map((info) => (
        <div
          key={info.label}
          className="flex items-start justify-between gap-4 border-t border-border-subtle pt-3 text-text-subtle"
        >
          <span className="shrink-0">{info.label}</span>
          <span className="min-w-0 text-right font-semibold break-all">
            {info.value}
          </span>
        </div>
      ))}
    </div>
  );
};
