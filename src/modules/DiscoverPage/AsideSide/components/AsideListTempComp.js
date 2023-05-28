import React from "react";
import "./AsideListTempComp.css";
import AsideCardComp from "./AsideCardComp";

export default function AsideListTempComp() {
  return (
    <div className="asid-cards-list-main-div">
      <div className="asid-list-text-div">
        <p className="other-directions-text">Other Destinations</p>
        <p className="see-all">See all</p>
      </div>
      <div className="asid-cards-list-div">
        <AsideCardComp />
        <AsideCardComp />
        <AsideCardComp />
        <AsideCardComp />
      </div>
    </div>
  );
}
