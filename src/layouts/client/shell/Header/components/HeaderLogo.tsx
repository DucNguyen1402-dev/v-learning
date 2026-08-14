import { Theme } from "@shared/theme";

export const HeaderLogo = () => {
  const { assets } = Theme.use();

  return (
    <div className="flex items-center">
      <img
        src={assets.logo}
        alt="V-learning Logo"
        className="w-48 md:w-56 lg:w-60"
      />
    </div>
  );
};
