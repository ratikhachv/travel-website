import React from "react";
import discoverImage from "../../../../assets/comp img.png";
import locationImage from "../../../../assets/discover-location.png";
import "./PhotoTitleLocation.css";

export default function PhotoTitleLocation() {
  return (
    <div className="photo-title-location-div">
      <img className="discover-page-image" src={discoverImage} alt="bigImage" />
      <h1 className="copmonent-title">memorable festivals on bali beach</h1>
      <div className="location-div">
        <img className="location-img" src={locationImage} alt="locationImage" />
        <p className="location-text">Bali, Indonesia</p>
      </div>
    </div>
  );
}
