import React from "react";
import FooterLogo from "./components/FooterLogo";
import SocialMedia from "./components/SocialMedia";
import FooterTemplate from "./FooterTemplate";
import FooterColumns from "./components/FooterColumns";

export default function Footer() {
  return (
    <>
      <FooterTemplate
        footerLogo={<FooterLogo />}
        footerLink={<FooterColumns />}
        fooetrServices={<FooterColumns />}
        footerContact={<FooterColumns />}
        icons={<SocialMedia />}
      />
    </>
  );
}
