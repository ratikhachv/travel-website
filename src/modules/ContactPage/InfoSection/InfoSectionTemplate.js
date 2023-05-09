import React from "react";
import "./InfoSectionTemplate.css";
export default function InfoSectionTemplate(props) {
  return (
    <>
      <div className="info-section-div">
        {props.mapComponent}
        {props.formComponent}
      </div>
    </>
  );
}
