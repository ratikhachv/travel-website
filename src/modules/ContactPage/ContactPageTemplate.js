import React from "react";
import "./ContactPageTemplate.css";

export default function ContactPageTemplate(props) {
  return (
    <>
      {props.fixedHeader}
      {props.pagesHeading}
      <div className="section-div">
        {props.formSection}
        {props.infoSection}
      </div>
    </>
  );
}
