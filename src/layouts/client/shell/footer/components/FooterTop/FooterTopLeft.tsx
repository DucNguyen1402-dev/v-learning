import { Theme } from "@shared/theme";

import { darkLogo, lightLogo } from "@assets/logo/client";

export const FooterTopLeft = () => {
  const { theme } = Theme.use();

  const logo = theme === "light" ? lightLogo : darkLogo;

  return (
    <div className="flex flex-col gap-2 py-4 pb-8">
      <img src={logo} className="w-54" />
      <div className="max-w-70">
        <blockquote className="border-primary text-muted-foreground ml-6 border-l-2 pl-4 text-lg leading-relaxed italic">
          Học để hiểu, thực hành để phát triển.
        </blockquote>
      </div>
    </div>
  );
};
