import React from "react";
import "./AsideCardComp.css";
import backgroundImage from "../../../../assets/asid card img.png";

export default function AsideCardComp() {
  return (
    <div className="asid-card-div">
      <img
        className="aside-background-img"
        src={backgroundImage}
        alt="backgroundimage"
      />
      <div className="asid-title-text-div">
        <h1 className="asid-card-title">
          Wakatobi beach is a paradise for coral reets in indonesia
        </h1>
        <p className="asid-card-location-text">Yogyakarta, Indonesia</p>
      </div>
      <p className="asid-view-more-text">View More</p>
    </div>
  );
}
