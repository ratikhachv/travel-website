import React from "react";
import img1 from "../../../../assets/1img.png";
import img2 from "../../../../assets/2img.png";
import "./TwoPhotosComp.css";

export default function TwoPhotosComp() {
  return (
    <div className="two-photo-div">
      <img className="img-comp" src={img1} alt="pirveli" />
      <img className="img-copm" src={img2} alt="meore" />
    </div>
  );
}
