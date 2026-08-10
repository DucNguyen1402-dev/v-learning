import { FooterBottom } from "./FooterBottom";
import { FooterTop } from "./FooterTop";

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="layout-container">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};
