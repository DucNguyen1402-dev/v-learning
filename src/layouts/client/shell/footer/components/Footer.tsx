import { FooterBottom } from "./FooterBottom";
import { FooterTop } from "./FooterTop";

export const Footer = () => (
  <footer className="footer-wrapper">
    <div className="layout-container-md">
      <FooterTop />
      <FooterBottom />
    </div>
  </footer>
);
