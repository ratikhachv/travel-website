import React from "react";
import "./ContactPageTemplate.css";

export default function ContactPageTemplate(props) {
  return (
    <>
      {props.pagesHeading}
      <div className="contactPage-section-div">
        <div className="form-section-div">{props.formSection}</div>
        <div className="info-section-div">{props.infoSection}</div>
      </div>
    </>
  );
}
