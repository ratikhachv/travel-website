import React from "react";
import "./ContactPageTemplate.css";

export default function ContactPageTemplate(props) {
  return (
    <>
      {props.pagesHeading}
      <div className="contactPage-div">
        {props.formSection}
        {props.infoSection}
      </div>
    </>
  );
}
