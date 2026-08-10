import { FooterTopLeft } from "./FooterTopLeft";
import { FooterTopRight } from "./FooterTopRight";

export const FooterTop = () => {
  return (
    <section className="flex items-center justify-between">
      <FooterTopLeft />
      <FooterTopRight />
    </section>
  );
};
