import { Theme, themeLogos } from "@shared/theme";

export const HeaderLogo = () => {
  const { theme } = Theme.use();

  return (
    <div className="flex items-center">
      <img
        src={themeLogos[theme]}
        alt="V-learning Logo"
        className="w-48 md:w-56 lg:w-60"
      />
    </div>
  );
};
