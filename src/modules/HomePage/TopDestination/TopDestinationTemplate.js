import React from "react";
import "./TopDestinationTemplate.css";
export default function TopDestinationTemplate(props) {
  return (
    <>
      <div id="mainDiv">
        <div id="commonDiv">
          <p className="TopDestination">top destination</p>
          <p className="DiscoverYourLove">Discover your love</p>
        </div>
        <div className="TopDestinationTemplateSection">
          {props.boxes}
          {props.boxes}
          {props.boxes}
          {props.boxes}
          {props.boxes}
          {props.boxes}
        </div>
      </div>
    </>
  );
}
