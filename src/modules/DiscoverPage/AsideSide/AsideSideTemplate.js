import React from "react";
import "./AsideSideTemplate.css";

export default function AsideSideTemplate(props) {
  return (
    <div className="main-right-side-div">
      {props.mapComp}
      {props.asideListTempComp}
    </div>
  );
}
