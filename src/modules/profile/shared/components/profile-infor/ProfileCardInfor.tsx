import { ProfileCardInforSkeleton } from "./ProfileCardInforSkeleton";

type ProfileCardInforProps = {
  currentUser:
    | {
        taiKhoan: string;
        soDT: string;
        email: string;
      }
    | undefined;
};
export const ProfileCardInfor = ({ currentUser }: ProfileCardInforProps) => {
  if (!currentUser) return <ProfileCardInforSkeleton />;
  const informations = [
    { label: "Tài khoản", value: currentUser.taiKhoan },
    { label: "Số Điện Thoại", value: currentUser.soDT },
    { label: "Email", value: currentUser.email },
  ];
  return (
    <div className="flex flex-col gap-4 text-[13px]">
      {informations.map((info) => (
        <div
          key={info.label}
          className="flex items-center justify-between border-t border-border-subtle pt-3 text-text-subtle"
        >
          <span>{info.label}</span>
          <span className="font-semibold">{info.value}</span>
        </div>
      ))}
    </div>
  );
};
