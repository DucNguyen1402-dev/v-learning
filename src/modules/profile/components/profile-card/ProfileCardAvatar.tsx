import { User } from "@shared/user";
import { UserProfile } from "@shared/user-profile";

export const ProfileCardAvatar = () => {
  const { avatar } = User.use();
  const profile = UserProfile.get();

  const renderAvatar =
    avatar?.current?.type === "image" ? (
      <img
        src={avatar?.current.value}
        alt="User Avatar"
        className="size-20 rounded-full object-cover"
      />
    ) : (
      <div className="flex-center size-20 rounded-pill border border-border-default bg-bg-subtle text-3xl font-bold text-text-subtle">
        {avatar?.current?.value}
      </div>
    );
  return (
    <div className="flex-center flex-col">
      {renderAvatar}
      <h1 className="mt-3 text-xl font-bold">{profile?.name}</h1>
      <p className="mt-1 text-xs text-text-subtle">{profile?.email}</p>
      <span className="mt-3 rounded-full border border-border-subtle bg-bg-subtle px-3 py-1 text-xs font-medium text-text-subtle">
        Học viên
      </span>
    </div>
  );
};
