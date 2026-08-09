import { Theme, type ThemeAssets } from "@shared/theme";

import { darkLogo, lightLogo } from "@assets/logo/client";

const logoMapping = {
  dark: darkLogo,
  light: lightLogo,
} satisfies ThemeAssets;

export const HeaderLogo = () => {
  const { theme } = Theme.use();

  return (
    <div className="flex items-center">
      <img src={logoMapping[theme]} alt="V-learning Logo" className="w-60" />
    </div>
  );
};
