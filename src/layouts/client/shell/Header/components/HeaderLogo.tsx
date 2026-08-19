import { User } from "@shared/user";

export const HeaderLogo = () => {
  const {
    theme: { asset },
  } = User.use();

  return (
    <div className="flex items-center">
      <img
        src={asset.logo}
        alt="V-learning Logo"
        className="w-48 md:w-56 lg:w-60"
      />
    </div>
  );
};
