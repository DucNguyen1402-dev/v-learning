import { type ThemeAssets, useTheme } from "@shared/theme";

import { darkLogo, lightLogo } from "@assets/logo/client";

const logoMapping = {
  dark: darkLogo,
  light: lightLogo,
} satisfies ThemeAssets;

const HeaderLogo = () => {
  const { currentTheme } = useTheme();

  return (
    <div className="flex items-center">
      <img
        src={logoMapping[currentTheme]}
        alt="V-learning Logo"
        className="w-64"
      />
    </div>
  );
};

export default HeaderLogo;
