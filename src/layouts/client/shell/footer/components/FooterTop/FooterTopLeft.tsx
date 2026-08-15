import { Theme } from "@shared/theme";

export const FooterTopLeft = () => {
  const { assets } = Theme.use();

  return (
    <div className="footer-top-left">
      <img src={assets.logo} className="w-56" />
      <div className="max-w-80 lg:max-w-100">
        <p className="border-primary border-l-2 pl-4 text-sm leading-relaxed text-muted-foreground italic lg:ml-6">
          Nền tảng học lập trình với các khóa học chất lượng dành cho mọi cấp
          độ.
        </p>
      </div>
    </div>
  );
};
