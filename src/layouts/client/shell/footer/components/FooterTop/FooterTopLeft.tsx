import { Theme } from "@shared/theme";

import { darkLogo, lightLogo } from "@assets/logo/client";
export const FooterTopLeft = () => {
  const { theme } = Theme.use();

  const logo = theme === "light" ? lightLogo : darkLogo;

  return (
    <div className="footer-top-left">
      <img src={logo} className="w-56" />
      <div className="max-w-80 lg:max-w-100">
        <p className="border-primary border-l-2 pl-4 text-sm leading-relaxed text-muted-foreground italic lg:ml-6">
          Nền tảng học lập trình với các khóa học chất lượng dành cho mọi cấp
          độ.
        </p>
      </div>
    </div>
  );
};
