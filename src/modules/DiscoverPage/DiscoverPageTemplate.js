import React from "react";
import "./DiscoverPageTemplate.css";

export default function DiscoverPageTemplate(props) {
  return (
    <>
      {props.pagesHeading}
      <div className="discover-page-div">
        {props.textPhotoSide}
        {props.asideSide}
      </div>
    </>
  );
}
