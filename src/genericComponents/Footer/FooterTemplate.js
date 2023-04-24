import React from "react";
import "./FooterTemplate.css";

export default function FooterTemplate(props) {
  return (
    <>
      <footer className="footer">
        <div className="footerNaviation">
          {props.footerLogo}
          {props.footerLink}
          {props.fooetrServices}
          {props.footerContact}
        </div>
        <div className="iconsDiv">{props.icons}</div>
      </footer>
    </>
  );
}
